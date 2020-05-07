/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Splash from './Splash'
import { observer, inject } from "mobx-react"
import AppStore from './stores/AppStore'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const RootStack = createStackNavigator(
  {
    splash: Splash
  },
  {
    initialRouteName: 'splash'
  }
)
const AppContainer = createAppContainer(RootStack)

export interface Props {
  appStore: AppStore
}

class App extends React.Component<Props> {
  render() {
    return <AppContainer />
  }
}

export default inject("appStore")(observer(App))
