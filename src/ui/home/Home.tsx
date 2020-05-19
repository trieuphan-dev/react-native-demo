import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ScrollView, RefreshControl, Text, SafeAreaView, TouchableHighlight, Alert, Image } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../resources/images/ImagesFactory'
import AppColor from '../../resources/colors/AppColor'
import Spinner from 'react-native-loading-spinner-overlay'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import HomeStore from '../../stores/home/HomeStore';
import ImagePlaceholder from 'react-native-image-with-placeholder'
import MainActionsView from './views/MainActionsView'
import ProgressCircle from 'react-native-progress-circle'
import MoreActionsView from './views/MoreActionsView'

export interface Props extends NavigationStackScreenProps {
    homeStore: HomeStore
}

@inject("homeStore")
@observer
export default class Home extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    async componentDidMount() {

    }

    componentDidUpdate() {

    }

    static navigationOptions = {
        headerShown: false
    }

    onRefresh = () => {
        this.props.homeStore.isLoading = true;
        setTimeout(() => {
            this.props.homeStore.isLoading = false;
        }, 1000)
    }

    render() {
        return (
            <SafeAreaView style={styles.mainArea} >
                <Image source={ImagesFactory.slideImage0} style={styles.profileImgArea}></Image>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl refreshing={this.props.homeStore.isLoading} onRefresh={this.onRefresh} />
                    }
                >
                    <Text>{this.props.homeStore.fullName}</Text>
                    <Text>{this.props.homeStore.accountNumber}</Text>
                    <Text>{this.props.homeStore.balance}</Text>
                    <MainActionsView />
                    <View style={styles.profileProgressArea}>
                        <ProgressCircle
                            percent={30}
                            radius={20}
                            borderWidth={5}
                            color="#cad93f"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 12, color: AppColor.grey }}>{'30%'}</Text>
                        </ProgressCircle>
                        <Text style={styles.profilePercent}>Profile - 50% Complete</Text>
                        <Image source={ImagesFactory.arrowDown} style={styles.arrowDownImg}></Image>
                    </View>

                    <View style={styles.shorcutsArea}>
                        <View style={styles.shorcutsHeader}>
                            <Text style={styles.shortcutTitle}>Shortcuts</Text>
                            <View style={styles.shortcutAction}>
                                <Text style={{ fontSize: 18, color: 'black' }}>Create shortcut</Text>
                                <Image source={ImagesFactory.arrowRight} style={styles.arrowRight}></Image>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, color: AppColor.grey, marginTop: 5}}>Save your most frequent transactions as shortcuts.</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: 'black', marginTop: 20 , marginStart: 15}}>More</Text>
                    <MoreActionsView />

                    <View style={styles.forYouArea}>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    mainArea: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    profileImgArea: {
        position: 'absolute',
        width: "100%",
        left: 0,
        right: 0,
        top: 0,
        height: 260,
        alignItems: 'center',
        flexDirection: 'row',
        resizeMode: 'stretch',
    },

    scrollView: {
        width: '100%',
        marginTop: 80,
    },

    profileImg: {
        resizeMode: 'stretch',
    },

    profileProgressArea: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
        height: 70,
        marginEnd: 15,
        marginLeft: 15,
        shadowColor: "black",
        borderRadius: 10,
        marginTop: 20,
        paddingStart: 20,
        paddingEnd: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },

    progress: {
        width: 35,
        height: 35,
        backgroundColor: 'red'
    },

    arrowDownImg: {
        width: 35,
        height: 35,
        resizeMode: "center",
        alignSelf: "center",
    },

    profilePercent: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
        color: AppColor.purpleBrown,
        marginStart: 10,
    },

    shorcutsArea: {
        width: '100%',
        marginTop: 20,
        paddingEnd: 15,
        paddingStart: 15,
        backgroundColor: 'white'
    },

    shorcutsHeader: {
        flexDirection: 'row',
    },

    shortcutAction: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-end",
    },

    shortcutTitle: {
        fontSize: 18,
        color: 'black',
    },

    arrowRight: {
        width: 30,
        height: 30,
        resizeMode: 'center'
    },

    moreActionsArea: {
        height: 100,
        width: '100%',
        shadowColor: "black",
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

    forYouArea: {
        backgroundColor: 'orange',
        height: 300,
        width: '100%'
    },

    titleText: {
        flex: 1,
        justifyContent: 'center',
        color: AppColor.lightOrange,
        textAlign: 'center',
        marginEnd: 50
    },

    topArea: {
        width: "100%",
        height: 100,
        marginTop: 0,
        flexDirection: 'column'
    },
    loginArea: {
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'column',

    },
    loginButton: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: AppColor.lightOrange,
        backgroundColor: AppColor.lightOrange,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomArea: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'column'
    },
    iconBack: {
        resizeMode: 'center',
    }
})