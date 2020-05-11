import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import PageControl from 'react-native-page-control'
import { Pages } from 'react-native-pages'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import IntroStore from '../../stores/intro/IntroStore'
import ImagesFactory from '../../resources/images/ImagesFactory'
import AppColor from "../../resources/colors/AppColor"

export interface Props extends NavigationStackScreenProps {
    introStore: IntroStore
}

@inject("introStore")
@observer
class Intro extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    static navigationOptions = {
        header: null
      }

    async componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <View  >
                <Text>Hello Intro</Text>
            </View >
        )
    }
}
export default Intro

const styles = StyleSheet.create({
    mainArea: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        flexDirection: 'column',
        backgroundColor: "white"
    },

    topArea: {
        width: "100%",
        height: 200,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    middleArea: {
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1
    },

    bottomArea: {
        width: "100%",
        height: 220,
        flexDirection: 'column',
        justifyContent: 'center'
    }

})