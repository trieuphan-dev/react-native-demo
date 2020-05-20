import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView, TouchableHighlight, Alert } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import AppColor from '../../resources/colors/AppColor'
import TransactionHistoryStore from '../../stores/history/TransactionHistoryStore'

export interface Props extends NavigationStackScreenProps {
  transactionHistory: TransactionHistoryStore
}

@inject("transactionHistory")
@observer
export default class Activity extends React.Component<Props> {

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
      <View style={styles.mainArea} >
        <Text>Activity</Text>
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