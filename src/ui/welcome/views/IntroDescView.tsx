import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { observer, inject } from "mobx-react"
import IntroSliderStore from '../../../stores/intro/IntroSliderStore'

export interface Props {
    introSliderStore?: IntroSliderStore
    pageIndex: number
}

@inject("introSliderStore")
@observer
class IntroDescView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.tilte}>{this.props.introSliderStore?.titles[this.props.pageIndex]} </Text>
                <Text style={styles.desc}>{this.props.introSliderStore?.descs[this.props.pageIndex]} </Text>
            </View>
        )
    }
}

export default IntroDescView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tilte: {
        textAlign: "center",
        fontSize: 13,
        alignSelf: 'center',
        paddingLeft: 32,
        paddingRight: 32,
    },
    desc: {
        textAlign: "center",
        fontSize: 13,
        alignSelf: 'center',
        paddingLeft: 32,
        paddingRight: 32,
    }
})