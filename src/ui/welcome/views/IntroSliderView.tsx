import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { observer, inject } from "mobx-react"
import ImagesFactory from "../../../resources/images/ImagesFactory"
import IntroSliderStore from '../../../stores/intro/IntroSliderrStore'

export interface Props {
    introSliderStore?: IntroSliderStore
    pageIndex: number
}

@inject("introSliderStore")
@observer
class OnboardingCenterView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.tilteCenter}>{this.props.introSliderStore?.titles[this.props.pageIndex]} </Text>
                <Image source={this.props.introSliderStore?.images[this.props.pageIndex] ?? ImagesFactory.slideImage0} style={styles.imageCenter} />
            </View>
        )
    }
}

export default OnboardingCenterView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tilteCenter: {
        textAlign: "center",
        fontSize: 13,
        alignSelf: 'center',
        paddingLeft: 32,
        paddingRight: 32,
    },
    imageCenter: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop: 15
    }
})
