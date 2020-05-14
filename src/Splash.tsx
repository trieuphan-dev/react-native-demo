import * as React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack'
import SplashStore from './stores/SplashStore'
import AppColor from './resources/colors/AppColor'
import ImagesFactory from './resources/images/ImagesFactory'
import { observer, inject } from 'mobx-react'

import {
  StyleSheet,
  Text,
  ImageBackground,
  Image
} from 'react-native';


export interface Props extends NavigationStackScreenProps {
  splashStore: SplashStore
}

@inject("splashStore")
@observer
export default class Splash extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('intro')
    }, 2000)
  }

  componentDidUpdate() {

  }

  static navigationOptions = {
    headerShown: false
  }

  render() {
    return (
      <ImageBackground source={ImagesFactory.appBackground} style={styles.mainArea}>
        <Image source={ImagesFactory.appLogo} style={styles.logo}></Image>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainArea: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    flexDirection: 'column',
    justifyContent: 'center'
  },
  indicator: {
    color: AppColor.lightYellow
  },
  logo: {
    resizeMode: 'center',
    alignSelf: 'center'
  }
})
