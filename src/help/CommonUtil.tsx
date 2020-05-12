import { Video } from "../model/VideoModel"

class CommonUtil {
    constructor() {
    }

    validateEmail(email: string): boolean {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }

    videoDate(video: Video): string {
        return "12/19/2019 | Expired"
    }

    videoViewsShares(video: Video): string {
        let shareds = video.shares > 1 ?
            String(video.shares) + " shares" : String(video.shares) + " share"
        let view = video.views > 1 ? String(video.views) + " views" : String(video.views) + " view"
        return shareds + " | " + view
    }

    isExpired(video: Video): boolean {
        return true
    }
}

export const commonUtil = new CommonUtil()