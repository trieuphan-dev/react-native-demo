import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView, TouchableHighlight, Alert } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../../resources/images/ImagesFactory'
import AppColor from '../../../resources/colors/AppColor'
import SignInStore from '../../../stores/auth/signin/SignInStore'
import HyperLink from 'react-native-hyperlink'
import Spinner from 'react-native-loading-spinner-overlay'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextField from '../../components/TextField'
import { Button } from 'react-native-elements'

export interface Props extends NavigationStackScreenProps {
  signInStore: SignInStore
}

@inject("signInStore")
@observer
export default class SignIn extends React.Component<Props> {
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

  forgotPassword = () => {
    this.props.navigation.navigate('forgotPassword')
  }

  signUp = () => {
    this.props.navigation.navigate('signUp')
  }

  signIn = () => {
    if (!this.props.signInStore.valid.get()) {
      return
    }
    this.props.signInStore.login().then(result => {
      if (result) {
        this.props.signInStore.setEmail("")
        this.props.signInStore.setPassword("")
        this.props.navigation.navigate('main')
      } else {
        Alert.alert(
          '',
          'Incorrect email or password. Please try again!',
          [
            { text: 'Ok', onPress: () => { }, style: 'cancel' },
          ],
          { cancelable: false }
        );
      }
    })
  }

  render() {
    return (
      <View style={styles.mainArea} >
        <Spinner
          visible={this.props.signInStore.isLoading}
          color={AppColor.orange}
        />
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }} >
          <View style={styles.titleArea}>
            <TouchableOpacity
              style={{width: 50, height: '100%'}}
              onPress={() => this.props.navigation.goBack()} >
              <Image style={styles.iconBack}
                source={ImagesFactory.iconBack} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Login In</Text>
          </View>
          <KeyboardAwareScrollView scrollEnabled={false} style={{ flex: 1 }} >
            <View style={styles.loginArea}>
              <TextField
                ref='email'
                placeholder='Enter Email, UserName, or Phone Number'
                description="UserName"
                keyboardType='email-address'
                autoCapitalize='none'
                returnKeyType={"next"}
                autoFocus={true}
                onSubmitEditing={() => this.passwordTextRef?.focus()}
                defaultValue={this.props.signInStore.email}
                onChangeText={(email: string) => this.props.signInStore.setEmail(email)}

              />
              <TextField
                ref={ref => (this.passwordTextRef = ref)}
                placeholder='Password'
                description="Password"
                returnKeyType={"done"}
                autoCapitalize='none'
                onSubmitEditing={this.signIn}
                defaultValue={this.props.signInStore.password}
                onChangeText={(password: string) => this.props.signInStore.setPassword(password)}
                secureTextEntry={true}
              />
            </View>
            <HyperLink
                onPress={this.forgotPassword}
                linkStyle={{ color: AppColor.grey, fontSize: 13 }}
                linkText={url => url === 'http://forgotpassword' ? 'Forgot password' : url}
              >
                <Text style={{ fontSize: 13, color: AppColor.grey, margin: 10, textAlign: 'right' }}>
                  http://forgotpassword
                  </Text>
              </HyperLink>
            <View style={styles.bottomArea}>
              <TouchableHighlight
                style={[styles.loginButton, !this.props.signInStore.valid.get() && { borderColor: AppColor.disable, backgroundColor: AppColor.disable }]}
                onPress={this.signIn}
                underlayColor={AppColor.lightYellow}
                disabled={!this.props.signInStore.valid.get()
                }
              >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 13 }}>Sign In</Text>
              </TouchableHighlight>
              <HyperLink
                onPress={this.signUp}
                linkStyle={{ color: AppColor.grey, fontSize: 13 }}
                linkText={url => url === 'http://signUplink' ? ' Sign Up' : url}
              >
                <Text style={{ fontSize: 13, color: AppColor.grey, textAlign: 'center', marginTop: 10 }}>
                Don't have an account? http://signUplink
                  </Text>
              </HyperLink>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainArea: {
    width: "100%",
    height: "100%",
    position: 'absolute',
    resizeMode: "cover",
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  titleArea: {
    width: "100%",
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },

  titleText: {
    flex: 1,
    justifyContent: 'center',
    color: AppColor.lightOrange,
    textAlign: 'center',
    marginEnd: 50
  },

  topArea: {
    width: "100%",
    height: 100,
    marginTop: 0,
    flexDirection: 'column'
  },
  loginArea: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',

  },
  loginButton: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: AppColor.lightOrange,
    backgroundColor: AppColor.lightOrange,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomArea: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column'
  },
  iconBack: {
    resizeMode: 'center',
  }
})