import * as React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { observer, inject } from "mobx-react"
import IntroBottomStore from '../../../stores/intro/IntroBottomStore'
import AppColor from '../../../resources/colors/AppColor'

export interface Props {
    introBottomStore?: IntroBottomStore
    signUp: () => any
    signIn: () => any
}

@inject("introBottomStore")
@observer
class IntroBottomView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'clear', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginStart: 25, marginEnd: 25}}>
                <TouchableHighlight
                    style={styles.signInButton}
                    onPress={this.props.signIn}
                    underlayColor={AppColor.white}
                >
                    <Text style={{ color: AppColor.lightOrange, textAlign: 'center', fontSize: 13 }}>Sign In</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.signUpButton}
                    onPress={this.props.signUp}
                    underlayColor={AppColor.lightOrange}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 13 }}>Sign Up</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default IntroBottomView

const styles = StyleSheet.create({
    signUpButton: {
        width: 160,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: AppColor.orange,
        backgroundColor: AppColor.lightOrange,
        justifyContent: 'center'
    },

    signInButton: {
        width: 160,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: AppColor.orange,
        justifyContent: 'center'
    }
})