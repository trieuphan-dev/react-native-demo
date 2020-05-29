import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class ScreenTwo extends React.Component {

  static navigationOptions = {

  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen </Text>
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
