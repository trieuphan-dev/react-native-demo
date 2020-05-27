export interface TransactionHistory {
    activityStatus: string
    thirdPartyProfilePicture: string
    thirdPartyEmailAddress: string
    vat: number
    fee: number
    caption: number
    amount: number
    activityType: string
    activityDate: number
}

export declare type Activities = TransactionHistory[] | null

export interface ActtivityResult {
    responseCode: number
    message: string
    activities: Activities
}