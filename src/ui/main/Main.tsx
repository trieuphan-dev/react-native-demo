import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ScrollView, RefreshControl, Text, SafeAreaView, TouchableHighlight, Alert, Image } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../resources/images/ImagesFactory'
import AppColor from '../../resources/colors/AppColor'
import MainStore from '../../stores/main/MainStore';
import ProgressCircle from 'react-native-progress-circle'

export interface Props extends NavigationStackScreenProps {
    mainStore: MainStore
  }
  class Main extends React.Component<Props> {

    async componentDidMount() {

    }
  
    componentDidUpdate() {
  
    }
  
    static navigationOptions = {
      headerShown: false
    }

    render() {
        return (<Text>Main Screen</Text>)
    }
  }

  export default inject("mainStore")(observer(Main))