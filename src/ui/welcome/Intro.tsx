import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ImageBackground, Text } from 'react-native'
import PageControl from 'react-native-page-control'
import { Pages } from 'react-native-pages'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import IntroStore from '../../stores/intro/IntroStore'
import ImagesFactory from '../../resources/images/ImagesFactory'
import AppColor from '../../resources/colors/AppColor'
// import IntroBottomView from './views/IntroBottomView'
// import IntroSliderView from './views/IntroSliderView'



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
            <View style={styles.mainArea} >
                <ImageBackground source={ImagesFactory.appBackground} style={styles.mainArea}>
                </ImageBackground>
                <View style={styles.topArea} >
          <ImageBackground source={ImagesFactory.appLogoSmall} style={{ width: 100, height: 100, alignSelf: "center" }} >
          </ImageBackground>
        
        </View>
            </View>
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
        justifyContent: 'center'
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

