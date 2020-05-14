import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, Linking, Image, Text, SafeAreaView, TouchableOpacity, TouchableHighlight, Alert } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../../resources/images/ImagesFactory'
import AppColor from '../../../resources/colors/AppColor'
import SignUpStore from '../../../stores/auth/signup/SignUpStore'
import TextField from '../../components/TextField'
import HyperLink from 'react-native-hyperlink'
import Spinner from 'react-native-loading-spinner-overlay'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export interface Props extends NavigationStackScreenProps {
  signUpStore: SignUpStore
}

@inject("signUpStore")
@observer
export default class SignUp extends React.Component<Props> {
  passwordTextsRef = new Map<string, TextField | null>()
  constructor(props: Props) {
    super(props)
  }

  async componentDidMount() {

  }

  componentDidUpdate() {

  }

  static navigationOptions = {
    headerShown: false,
  }

  signUp = () => {
    if (!this.props.signUpStore.valid.get()) {
      return
    }
    this.props.signUpStore.signUp().then(result => {
      if (result) {
        this.props.signUpStore.setEmail("")
        this.props.signUpStore.setPassword("")
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

  navigateSignIn = () => {
    this.props.navigation.navigate('signIn')
  }

  nextFocus = (key: string) => {
    this.passwordTextsRef.get(key)?.focus()
  }

  render() {
    return (
      <View style={styles.mainArea} >
        <Spinner
          visible={this.props.signUpStore.isLoading}
          color={AppColor.orange}
        />
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }} >
          <View style={styles.titleArea}>
            <TouchableOpacity
              style={{ width: 50, height: '100%' }}
              onPress={() => this.props.navigation.goBack()} >
              <Image style={styles.iconBack}
                source={ImagesFactory.iconBack} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Create Account</Text>
          </View>
          <KeyboardAwareScrollView scrollEnabled={true} style={{ flex: 1 }} >
            <View style={styles.signupArea}>
              <View style={styles.nameArea}>
                <View style={styles.firstName}>
                  <TextField
                    ref={ref => { this.passwordTextsRef.set("fname", ref) }}
                    placeholder='First Name'
                    autoCapitalize='words'
                    autoFocus={true}
                    defaultValue={this.props.signUpStore.firstName}
                    onSubmitEditing={() => this.nextFocus("lname")}
                    onChangeText={(firstName: string) => this.props.signUpStore.setFirstName(firstName)}
                    returnKeyType={"next"}
                  />
                </View>

                <View style={styles.lastName}>
                  <TextField
                    placeholder='Last Name'
                    ref={ref => { this.passwordTextsRef.set("lname", ref) }}
                    autoCapitalize='words'
                    defaultValue={this.props.signUpStore.lastName}
                    onSubmitEditing={() => this.nextFocus("email")}
                    onChangeText={(lastName: string) => this.props.signUpStore.setLastName(lastName)}
                    returnKeyType={"next"}
                  />
                </View>
              </View>

              <TextField
                placeholder='Email Address'
                autoCapitalize='none'
                ref={ref => { this.passwordTextsRef.set("email", ref) }}
                keyboardType='email-address'
                defaultValue={this.props.signUpStore.email}
                onSubmitEditing={() => this.nextFocus("password")}
                onChangeText={(email: string) => this.props.signUpStore.setEmail(email)}
                returnKeyType={"next"}
              />
              <TextField
                placeholder='Password'
                ref={ref => { this.passwordTextsRef.set("password", ref) }}
                autoCapitalize='none'
                defaultValue={this.props.signUpStore.password}
                onSubmitEditing={() => this.nextFocus("phone")}
                onChangeText={(password: string) => this.props.signUpStore.setPassword(password)}
                returnKeyType={"next"}
                secureTextEntry={true}
              />

              <TextField
                placeholder='Phone Number'
                ref={ref => { this.passwordTextsRef.set("phone", ref) }}
                autoCapitalize='none'
                keyboardType='phone-pad'
                defaultValue={this.props.signUpStore.phoneNumber}
                onSubmitEditing={() => this.nextFocus("username")}
                onChangeText={(phone: string) => this.props.signUpStore.setPhone(phone)}
                returnKeyType={"next"}
              />

              <TextField
                placeholder='UserName'
                ref={ref => { this.passwordTextsRef.set("username", ref) }}
                autoCapitalize='words'
                defaultValue={this.props.signUpStore.userName}
                onChangeText={(phone: string) => this.props.signUpStore.setUserName(phone)}
                returnKeyType={"done"}
              />

            </View>
            <View style={styles.bottomArea}>
              <HyperLink
                onPress={(url, _) => Linking.openURL(url)}
                linkStyle={{ color: AppColor.lightYellow, fontSize: 13 }}
                linkText={url =>
                  url === 'https://www.mypaga.com/paga-web/customer/mobile/static/company/privacy' ? 'Term of Use' :
                    (url === 'https://www.mypaga.com/paga-web/customer/static/company/terms' ? 'Privacy Policy' : url)
                }
              >
                <Text style={{ fontSize: 13, color: AppColor.grey, textAlign: 'center', marginTop: 0, marginBottom: 16 }}>
                  By signing up, you agree to our https://www.mypaga.com/paga-web/customer/mobile/static/company/privacy and https://www.mypaga.com/paga-web/customer/static/company/terms
                </Text>
              </HyperLink>
              <TouchableHighlight
                style={[styles.signUpButton, !this.props.signUpStore.valid.get() && { borderColor: AppColor.disable, backgroundColor: AppColor.disable }]}
                underlayColor={AppColor.disable}
                onPress={this.signUp}
                disabled={!this.props.signUpStore.valid.get()
                }
              >
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 13 }}>Sign Up</Text>
              </TouchableHighlight>
              <HyperLink
                onPress={this.navigateSignIn}
                linkStyle={{ color: AppColor.lightYellow, fontSize: 13 }}
                linkText={url => url === 'http://signInlink' ? 'Sign In' : url}
              >
                <Text style={{ fontSize: 13, color: AppColor.grey, margin: 16, textAlign: 'center' }}>
                  Already an account ? http://signInlink
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
    resizeMode: "cover",
    position: 'absolute',
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
  signupArea: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    flexDirection: 'column'
  },

  nameArea: {
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  firstName: {
    width: '45%'
  },
  lastName: {
    width: '45%'
  },
  bottomArea: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column'
  },
  signUpButton: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: AppColor.lightOrange,
    backgroundColor: AppColor.lightOrange,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButon: {
    height: 44,
    width: 30,
    marginLeft: 8,
    alignItems: 'flex-start',
    justifyContent: "flex-start"
  },

  iconBack: {
    resizeMode: 'center',
  }
})