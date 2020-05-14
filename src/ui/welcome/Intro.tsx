import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native'
import PageControl from 'react-native-page-control'
import { Pages } from 'react-native-pages'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import IntroStore from '../../stores/intro/IntroStore'
import ImagesFactory from '../../resources/images/ImagesFactory'
import AppColor from '../../resources/colors/AppColor'
import IntroBottomView from './views/IntroBottomView'
import IntroSliderView from './views/IntroSliderView'

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
        headerShown: false
      }

    async componentDidMount() {
    }

    componentDidUpdate() {
    }

    navigateSignIn = () => {
        console.log("sign In");
        this.props.navigation.navigate('signIn')
      }
    
      navigateSignUp = () => {
        console.log("sign Up");
        this.props.navigation.navigate('signUp')
      }

    onChange = (index: any) => {
        this.props.introStore.currentIndex = index.index
    }

    render() {
        return (
            <View style={styles.mainArea} >
                <ImageBackground source={ImagesFactory.appBackground} style={styles.mainArea}>

                    <View style={styles.middleArea} >
                        <Pages indicatorPosition="none" onScrollEnd={(index: any) => this.onChange({ index })}>
                            <IntroSliderView
                                pageIndex={0}
                            />
                            <IntroSliderView
                                pageIndex={1}
                            />
                            <IntroSliderView
                                pageIndex={2}
                            />
                            <IntroSliderView
                                pageIndex={3}
                            />
                        </Pages>
                    </View>

                    <View style={styles.descArea} >
                        <PageControl
                            style={{ position: 'absolute', left: 0, right: 0, top: 5 }}
                            numberOfPages={4}
                            currentPage={this.props.introStore.currentIndex}
                            disabled={true}
                            hidesForSinglePage
                            pageIndicatorTintColor={AppColor.lightGrey}
                            currentPageIndicatorTintColor={AppColor.orange}
                        />
                        <Text style={styles.tilte}>{this.props.introStore.titles[this.props.introStore.currentIndex]} </Text>
                        <Text style={styles.desc}>{this.props.introStore.descs[this.props.introStore.currentIndex]} </Text>
                    </View>

                    <View style={styles.topArea} >
                        <Image source={ImagesFactory.appLogoSmall} style={styles.logo}></Image>
                    </View>

                    <View style={styles.bottomArea} >
                    <IntroBottomView signIn={this.navigateSignIn} signUp={this.navigateSignUp} />
                    </View>
                </ImageBackground>
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
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },

    middleArea: {
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'transparent'
    },

    bottomArea: {
        width: "100%",
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    descArea: {
        width: "100%",
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop: 5
    },

    logo: {
        resizeMode: 'center',
        alignSelf: 'center'
    },

    tilte: {
        textAlign: "left",
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 32,
        paddingRight: 32,
        marginTop: 20,
        color: '#f26522'
    },
    desc: {
        textAlign: "left",
        fontSize: 13,
        paddingLeft: 32,
        paddingRight: 32,
        marginTop: 10
    }
})

