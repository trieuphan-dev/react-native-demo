import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Video } from './../../model/VideoModel'
import AppColor from './../../resources/colors/AppColor'
import VideoItem from './VideoItem'

export interface VideoListProp {
    videos: Video[],
    openMenu: (item: Video) => any
    videoDetailEvent: (item: Video) => any
}

export default class VideoList extends React.Component<VideoListProp> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <FlatList<Video>
                data={this.props.videos}
                ItemSeparatorComponent={() =>
                    <View style={{ width: '100%', height: 5, backgroundColor: AppColor.standardBackground }} />
                }
                renderItem={({ item }: { item: Video }) => (
                    <TouchableOpacity onPress={() => this.props.videoDetailEvent(item)}>
                        <VideoItem video={item} openMenu={this.props.openMenu} />
                    </TouchableOpacity>
                )}
                keyExtractor={(_, index) => index.toString()}
            />
        )
    }

}