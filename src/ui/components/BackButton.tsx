import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'react-native-elements'
import AppColor from '../../resources/colors/AppColor'
import { NavigationStackProp } from 'react-navigation-stack'

type BackButtonProp = {
  navigation?: NavigationStackProp
  gobackEvent?: () => void
}

class BackButton extends React.Component<BackButtonProp> {
  back = () => {
    this.props.navigation?.goBack()
    if (this.props.gobackEvent !== null && this.props.gobackEvent !== undefined ) {
      this.props.gobackEvent!()
    }
  }

  render() {
    return (
      <View style={styles.backButon}>
        <Button
          onPress={() => this.back()} type="clear"
          icon={
            <Icon
              name='chevron-left'
              size={18}
              color={AppColor.lightYellow}
            />
          }
        />
      </View>
    )
  }
}

export default BackButton

const styles = StyleSheet.create({
  backButon: {
    alignItems: "center",
    marginLeft: 8,
    width: 30,
    justifyContent: "flex-start"
  }
})