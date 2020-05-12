import React from 'react'
import { ImageBackground } from 'react-native'
import ImagesFactory from "../../resources/images/ImagesFactory"

export default class AppBackgoundImageView extends React.PureComponent {
  render() {
    return (
     <ImageBackground source={ImagesFactory.gradientBackground} style={styles.linearGradient} >
      { this.props.children }
      </ImageBackground>
    )
  }
}

const styles = {
  linearGradient: {
    flex: 1,
    backgroundColor: 'transparent'
  }
}


        