import { Text, TextInput, View, TextInputProps } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type ITextFieldProps = {
  description?: string,
  suffix?: string
} & TextInputProps

export default class TextField extends React.PureComponent<ITextFieldProps> {

  textInputRef?: TextInput | null
  constructor(props: any) {
    super(props)
  }

  focus = () => {
    this.textInputRef?.focus()
    this.textInputRef?.forceUpdate()
  }

  render () {
    const { description, suffix, ...otherProps } = this.props
    return (
      <View style={styles.container}>
        <View >
        {
          description && <Text style={styles.textDescription}>{description}</Text>
        }
          <TextInput
            ref={ref => (this.textInputRef = ref)}
            autoCorrect={false}
            style={styles.input}
            underlineColorAndroid={Colors.transparent}
            {...otherProps}
          />
          {suffix && (
            <View style={styles.wrapperSuffix}>
              <Text style={styles.textSuffix}>{suffix}</Text>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    paddingBottom: 16
  },
  inputWithSuffix: {
    width: '50%',
    height: 34,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
  },
  input: {
    width: '100%',
    height: 50,
    fontSize: 14,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: '#8f8e94',
  },
  textDescription: {
    marginTop: 10,
    fontSize: 14,
    marginBottom: 10,
    color: Colors.bluePaleCornflower
  },
  wrapperSuffix: {
    height: 34,
    paddingLeft: 5
  },
  textSuffix: {
    fontSize: 14,
    color: Colors.white
  }
}
