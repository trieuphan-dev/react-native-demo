
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default class AppBackgoundGradientView extends React.PureComponent { 
  render() {
    return (
    <LinearGradient colors={['#573a82', '#372260']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>
      { this.props.children }
    </LinearGradient>
    )
  }
}

const styles = {
  linearGradient: {
    flex: 1
  }
}