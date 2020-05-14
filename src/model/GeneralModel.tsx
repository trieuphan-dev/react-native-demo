export type MenuItem = {
    title: string
    action: string
  }

  export enum VideoActionTypes {
    SAVE_VIDEO = 'SAVE_VIDEO',
    VIEW_USR_PROFILE = 'VIEW_USR_PROFILE',
    SEND_VIA_PRIVATE_MSG = 'SEND_VIA_PRIVATE_MSG',
    SHARE_VIDEO = 'SHARE_VIDEO',
    REPORT_VIDEO = 'REPORT_VIDEO',
    HIDE_AND_SHOW_LESS_SIMILAR_VIDEOS = 'HIDE_AND_SHOW_LESS_SIMILAR_VIDEOS'
  }

  export const VideoActionMenuItems = [
  {
    title: 'Save Video',
    action: VideoActionTypes.SAVE_VIDEO
  },
  {
    title: "View user's profile",
    action: VideoActionTypes.VIEW_USR_PROFILE
  },
  {
    title: 'Send via private message',
    action: VideoActionTypes.SEND_VIA_PRIVATE_MSG
  },
  {
    title: 'Share',
    action: VideoActionTypes.SHARE_VIDEO
  },
  {
    title: 'Report video',
    action: VideoActionTypes.REPORT_VIDEO
  },
  {
    title: 'Hide & show less similar videos',
    action: VideoActionTypes.HIDE_AND_SHOW_LESS_SIMILAR_VIDEOS
  }
]