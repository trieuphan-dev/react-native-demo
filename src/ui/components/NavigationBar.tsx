import React from 'react'
import { View, StyleSheet, ImageBackground, SafeAreaView, Platform } from 'react-native'
import ImagesFactory from '../../resources/images/ImagesFactory'
import BackButton from './BackButton'
import { NavigationStackProp } from 'react-navigation-stack'

type NavigationBarProp = {
  navigation?: NavigationStackProp
  leftContent?: React.ReactElement
  centerContent?: React.ReactElement
  rightContent?: React.ReactElement
}

class NavigationBar extends React.Component<NavigationBarProp> {
  render() {
    return (
      <View style={styles.header}>
        <ImageBackground source={ImagesFactory.headerImage} style={{ flex: 1, backgroundColor: 'transparent' }} >
          <SafeAreaView style={{ flex: 1, flexDirection: 'column' }} >
            <View style={styles.container}>
              <View style={styles.leftContainer}>
                {this.props.leftContent ? this.props.leftContent : (this.props.navigation && <BackButton navigation={this.props.navigation} />)}
              </View>
              <View style={styles.centerContainer}>
                {this.props.centerContent}
              </View>
              <View style={styles.rightContainer}>
                {this.props.rightContent}
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    )
  }
}

export default NavigationBar

const styles = StyleSheet.create({
  header: {
    width: "100%",
    ...Platform.select({
      android: {
        height: 44
      }
    }),
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    height: 44,
    flexDirection: 'row',
    width: '100%'
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})