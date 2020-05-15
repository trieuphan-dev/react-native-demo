import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView, TouchableHighlight, Alert } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../../resources/images/ImagesFactory'
import AppColor from '../../../resources/colors/AppColor'
import SignInStore from '../../../stores/auth/signin/SignInStore'
import HyperLink from 'react-native-hyperlink'
import Spinner from 'react-native-loading-spinner-overlay'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextField from '../../components/TextField'
import HomeStore from '../../stores/home/HomeStore';

export interface Props extends NavigationStackScreenProps {
    homeStore: HomeStore
}

@inject("homeStore")
@observer
export default class Home extends React.Component<Props> {
    passwordTextRef?: TextField | null

    constructor(props: Props) {
        super(props)
    }

    async componentDidMount() {

    }

    componentDidUpdate() {

    }

    static navigationOptions = {
        headerShown: false
    }

    render() {
        return (
          <View >
              <Text>Home</Text>
          </View>
        );
      }
}