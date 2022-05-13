const ENVIRONMENTS = {
    LOCAL: {
        base_url: 'http://localhost:8000',
    },
}

export const NEXT_PUBLIC_ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'DEVELOPMENT';
export const BASE_URL = ENVIRONMENTS["LOCAL"].base_url

