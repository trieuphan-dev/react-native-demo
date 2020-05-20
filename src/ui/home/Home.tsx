import * as React from 'react';
import { observer, inject } from "mobx-react"
import { View, StyleSheet, ScrollView, RefreshControl, Text, SafeAreaView, TouchableHighlight, Alert, Image } from 'react-native'
import { NavigationStackScreenProps } from 'react-navigation-stack'
import ImagesFactory from '../../resources/images/ImagesFactory'
import AppColor from '../../resources/colors/AppColor'
import HomeStore from '../../stores/home/HomeStore';
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
        this.onGetUserData()
    }

    componentDidUpdate() {

    }

    static navigationOptions = {
        headerShown: false
    }

    navigateToActivity = () => {
        console.log("activity");
        this.props.navigation.navigate('transactionHistory')
    }

    navigateToBuyAirtime = () => {
        console.log("buyAirtime");
        this.props.navigation.navigate('buyAirtime')
    }

    navigateToBuyData = () => {
        console.log("buyData");
        this.props.navigation.navigate('buyData')
    }

    navigateToPayBill = () => {
        console.log("payBill");
        this.props.navigation.navigate('payBill')
    }

    onRefresh = () => {
        this.props.homeStore.isLoading = true
        this.onGetUserData()
    }

    onGetUserData = () => {
        this.props.homeStore.getUserData().then(result => {
            this.props.homeStore.isLoading = false
            if (!result) {
                Alert.alert(
                    'Error',
                    'Error when loading user info!',
                    [
                        { text: 'Ok', onPress: () => { }, style: 'cancel' },
                    ],
                    { cancelable: false }
                );
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.mainArea} >
                <Image source={{ uri: this.props.homeStore.profileUrl }} style={styles.profileImgArea}></Image>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl refreshing={this.props.homeStore.isLoading} onRefresh={this.onRefresh} />
                    }
                >
                    <View style={styles.accountInfoArea}>
                        <Text style={styles.fullName}>{this.props.homeStore.fullName}</Text>
                        <Text style={styles.balance}> ₦{this.props.homeStore.balance}</Text>
                        <Text style={styles.accountNumber}>Account Number: {this.props.homeStore.accountNumber}</Text>
                    </View>

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
                        <Text style={{ fontSize: 14, color: AppColor.grey, marginTop: 5 }}>Save your most frequent transactions as shortcuts.</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: 'black', paddingTop: 20, paddingStart: 15, backgroundColor: 'white' }}>More</Text>
                    <MoreActionsView payAirtime={this.navigateToBuyAirtime} payData={this.navigateToBuyData} payBill={this.navigateToPayBill} activity={this.navigateToActivity} />

                    <View style={styles.forYouArea}>
                        <Text style={{ fontSize: 18, color: 'black', marginTop: 20 }}>For You</Text>
                        <Image source={{ uri: this.props.homeStore.advertUrl }} style={styles.itemAds}></Image>
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

    accountInfoArea: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },

    fullName: {
        fontSize: 26,
        color: 'white'
    },

    balance: {
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
    },

    accountNumber: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
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
        paddingBottom: 30
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
        backgroundColor: 'red',
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
        backgroundColor: 'white',
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

    forYouArea: {
        marginBottom: 50,
        paddingStart: 15,
        paddingEnd: 15,
        shadowColor: "black",
        backgroundColor: "white",
        borderRadius: 1,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    },

    itemAds: {
        width: '100%',
        height: 220,
        resizeMode: "stretch",
        marginBottom: 20,
        marginTop: 5
    },

    iconBack: {
        resizeMode: 'center',
    }
})