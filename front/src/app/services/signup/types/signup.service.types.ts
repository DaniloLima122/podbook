export interface SignupRequestData {
    name: string,
    email: string,
    password: string
}

export interface SignupResponseData {
    content: Object,
    headers: Object,
    user: {
        id: number,
        name: string,
        email: string
    },
    auth: boolean,
    token: string
}