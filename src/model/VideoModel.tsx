export interface Video {
    _id: string
    videoUrl: string
    creator: string
    shares: number
    views: number
    isPublic: boolean
    thumbnailUrl: string
    title: string
    channel: string
    expirationDate: string
    postDate: string
    userID: string
    isDelete: Boolean
}

export declare type Videos = Video[] | null

export declare type NVideo = Video | null

export interface VideoResult {
    data: {
        videos: Videos
    }
}
