export interface User {
    userId: string
    username: string
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
    gender: string
}

export declare type UserAccount = User | null

export interface UserAccountResult {
    responseCode: number
    message: string
    userData: UserAccount
}