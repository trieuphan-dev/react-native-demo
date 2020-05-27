import React from 'react'
import {
  View, StyleSheet, Image, Text,
  SafeAreaView, TouchableOpacity
} from 'react-native'
import ImagesFactory from '../../resources/images/ImagesFactory'
import { TransactionHistory } from '../../model/TransactionHistoryModel'
import { commonUtil } from '../../help/CommonUtil'

type HisotryItemProp = {
  history: TransactionHistory
}

class HistoryItem extends React.Component<HisotryItemProp> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <View >
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }} >
          <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Image source={{ uri: this.props.history.thirdPartyProfilePicture }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.rightContainer}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 3 }}>
                  {this.props.history.activityDate}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '300', marginBottom: 3 }}>
                  {this.props.history.caption}
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

export default HistoryItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  leftContainer: {
    width: 114,
    height: 130,
    flexDirection: 'row'
  },
  rightContainer: {
    height: 130,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  btnOptions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  iconOptions: {
    height: 27,
    width: 27,
    resizeMode: 'stretch'
  }
})