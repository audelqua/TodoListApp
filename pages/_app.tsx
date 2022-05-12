import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, useStore } from "react-redux";
import { wrapper } from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore((state) => state)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
