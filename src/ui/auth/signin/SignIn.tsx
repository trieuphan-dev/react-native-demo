import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../../resources/images/ImagesFactory'
import AppColor from '../../../resources/colors/AppColor'
import SignInStore from '../../../stores/auth/signin/SignInStore'

export interface Props extends NavigationStackScreenProps {
    signInStore: SignInStore
  }
  
  @inject("signInStore")
  @observer
  export default class SignIn extends React.Component<Props> {
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
        <Text>Sign In</Text>
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
    }
  })