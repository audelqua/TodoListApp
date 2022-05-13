import axios from 'axios'
import { formatURL } from '../helpers'

interface props {
    url: String,
    method?: String,
    data?: Object
}


const fetchAPI = function ({ url, method, data }: props) {
    return new Promise((resolve, reject) => {
        let defaultConfig: any = {
            method: method || 'GET',
            url: formatURL(url),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        if (data) defaultConfig.data = data

        axios(defaultConfig)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject({ error })
            })
    })
}

export default fetchAPI

