import React from 'react'
import {
  View, StyleSheet, Image, Text,
  SafeAreaView, TouchableOpacity
} from 'react-native'
import ImagesFactory from '../../resources/images/ImagesFactory'
import { Video } from '../../model/VideoModel'
import { commonUtil } from '../../help/CommonUtil'

type VideoItemProp = {
  video: Video,
  openMenu: (item: Video) => any
}

class VideoItem extends React.Component<VideoItemProp> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <View >
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }} >
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Image source={{ uri: this.props.video.thumbnailUrl }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.rightContainer}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 3 }}>
                  {this.props.video.creator}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '300', marginBottom: 3 }}>
                  {this.props.video.title}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 12, fontWeight: '200' }}>
                    {commonUtil.videoDate(this.props.video)}
                  </Text>
                  {commonUtil.isExpired(this.props.video) && <Image source={ImagesFactory.clockIamge} style={{ marginLeft: 5, width: 13, height: 13 }} />}
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ flex: 1, flexDirection: 'row', fontSize: 12, fontWeight: '300' }}>
                  {commonUtil.videoViewsShares(this.props.video)}
                </Text>
                <View style={styles.btnOptions}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.props.openMenu(this.props.video)}
                  >
                    <Image
                      source={ImagesFactory.optionsImage}
                      style={styles.iconOptions}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

export default VideoItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  leftContainer: {
    width: 114,
    height: 130,
    flexDirection: 'row'
  },
  rightContainer: {
    height: 130,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  btnOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  iconOptions: {
    height: 27,
    width: 27,
    resizeMode: 'stretch'
  }
})