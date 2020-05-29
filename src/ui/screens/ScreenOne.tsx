import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class ScreenOne extends React.Component {

  // we won't need to configure navigationOptions just yet
  static navigationOptions = {

  };

  render() {
    return (
      <View style={styles.container}>
      <Text>Screen 1</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
