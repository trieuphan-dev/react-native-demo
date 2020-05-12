import React from 'react'
import {
  View, StyleSheet,
  TouchableOpacity, PanResponder,
  PanResponderInstance, GestureResponderEvent,
  PanResponderGestureState
} from 'react-native'
import AppColor from './../../resources/colors/AppColor'
import Video from 'react-native-video'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export interface VideoViewProp {
  left: number
  right: number
  url: string
  enablePan?: boolean
  viewType?: VideoViewType
}

export enum VideoViewType {
  zero = 'zero',
  large = 'large',
  haft = 'haft'
}

export default class VideoView extends React.Component<VideoViewProp> {
  gestureHandlers?: PanResponderInstance

  constructor(props: any) {
    super(props)
  }

  videoTouched = () => {
    let paused = this.state.paused
    this.setState(
      { paused: !paused }
    )
  }

  showHideVideo(isHow: Boolean) {
    this.setState(
      { paused: true, viewType: isHow ? VideoViewType.haft : VideoViewType.zero }
    )
  }

  panVideo = (isZoomOut: boolean) => {
    if (isZoomOut && this.state.viewType === VideoViewType.haft) {
      this.setState(
        { viewType: VideoViewType.large }
      )
    }
    else if (!isZoomOut && this.state.viewType === VideoViewType.large) {
      this.setState(
        { viewType: VideoViewType.haft }
      )
    }
  }

  state = {
    paused: false,
    viewType: this.props.viewType ?? VideoViewType.large
  }

  _handlePanResponderEnd = (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    if ((gestureState.dy * gestureState.dy) > 1.5) {
      this.panVideo(gestureState.dy < 0)
    }
  }

  _handlePanResponderMove = (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {

  }

  _handleStartShouldSetPanResponder = (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    return false
  }

  _handleMoveShouldSetPanResponder = (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    return true
  }

  _handlePanResponderGrant = (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
    if (gestureState.numberActiveTouches == 1) {
      this.videoTouched()
    }
  }

  render() {
    if (this.props.enablePan === true && !this.gestureHandlers) {
      this.gestureHandlers = PanResponder.create({
        onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
        onPanResponderGrant: this._handlePanResponderGrant,
        onPanResponderMove: this._handlePanResponderMove,
        onPanResponderRelease: this._handlePanResponderEnd,
        onPanResponderTerminationRequest: _ => true,
        onShouldBlockNativeResponder: _ => false
      })
    }

    return (
      <View
        {...this.gestureHandlers?.panHandlers}
        style={[
          styles.VideoView, {
            marginLeft: this.props.left,
            marginRight: this.props.right,
            aspectRatio: this.state.viewType === VideoViewType.large ? 0.875 : 1.6
          },

          this.state.viewType !== VideoViewType.zero &&
          { aspectRatio: this.state.viewType === VideoViewType.large ? 0.875 : 1.6 },
          this.state.viewType === VideoViewType.zero && { height: 0 }
        ]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.videoTouched}>
          <Video style={styles.Video}
            source={{ uri: this.props.url }}
            repeat={true}
            contain="contain"
            paused={this.state.paused}
          />
          {
            this.state.paused &&
            <View style={styles.playButton}>
              <Button
                onPress={this.videoTouched}
                type="clear"
                icon={
                  <Icon
                    name='play'
                    size={60}
                    color={AppColor.lightYellow}
                  />
                }
              />
            </View>
          }
          {this.props.children}
        </TouchableOpacity>
      </View >
    )
  }

}


const styles = StyleSheet.create({

  VideoView: {
    flexDirection: 'column',
    backgroundColor: 'black'
  },

  Video: {
    width: "100%",
    height: "100%"
  },

  playButton: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconOptions: {
    height: 27,
    width: 27,
    resizeMode: 'stretch'
  }
})