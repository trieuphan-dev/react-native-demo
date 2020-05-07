import * as React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack'
import { View } from "react-native";
import SplashStore from './stores/SplashStore'
import { observer, inject } from 'mobx-react'

import {
    StyleSheet,
    Text,
    ImageBackground
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
        
      }
    
      componentDidUpdate() {
    
      }
  
    static navigationOptions = {
      header: null
    }

    render() {
      return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Text>Hello, world Splash!</Text>
        </View>
      );
    }
  }
