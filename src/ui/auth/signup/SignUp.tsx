import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native'
import PageControl from 'react-native-page-control'
import { Pages } from 'react-native-pages'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../../resources/images/ImagesFactory'
import AppColor from '../../../resources/colors/AppColor'
import SignUpStore from '../../../stores/auth/signup/SignUpStore'

export interface Props extends NavigationStackScreenProps {
    signUpStore: SignUpStore
  }
  
  @inject("signUpStore")
  @observer
  export default class SignUp extends React.Component<Props> {
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
        <Text>Sign Up</Text>
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