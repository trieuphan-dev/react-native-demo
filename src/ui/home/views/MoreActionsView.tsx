import * as React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { observer, inject } from "mobx-react"
import MoreActionsStore from '../../../stores/home/MoreActionsStore'
import AppColor from '../../../resources/colors/AppColor'

export interface Props {
    moreActionsStore?: MoreActionsStore
    payAirtime: () => any
    payData: () => any
    payBill: () => any
    activity: () => any
}

@inject("moreActionsStore")
@observer
class MoreActionsView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.mainActionsArea}>
                <TouchableHighlight onPress={this.props.payAirtime} underlayColor="transparent">
                    <View style={styles.itemAction}>
                        <Image source={this.props.moreActionsStore?.images[0]} style={styles.imgAction}></Image>
                        <Text style={styles.textAction}>{this.props.moreActionsStore?.titles[0]}</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.payData} underlayColor="transparent">
                    <View style={styles.itemAction}>
                        <Image source={this.props.moreActionsStore?.images[1]} style={styles.imgAction}></Image>
                        <Text style={styles.textAction}>{this.props.moreActionsStore?.titles[1]}</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.payBill} underlayColor="transparent">
                    <View style={styles.itemAction}>
                        <Image source={this.props.moreActionsStore?.images[2]} style={styles.imgAction}></Image>
                        <Text style={styles.textAction}>{this.props.moreActionsStore?.titles[2]}</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.activity} underlayColor="transparent">
                    <View style={styles.itemAction}>
                        <Image source={this.props.moreActionsStore?.images[3]} style={styles.imgAction}></Image>
                        <Text style={styles.textAction}>{this.props.moreActionsStore?.titles[3]}</Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

export default MoreActionsView

const styles = StyleSheet.create({
    mainActionsArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        marginStart: 15,
        marginEnd: 15,
        shadowColor: "black",
        backgroundColor: "white",
        borderRadius: 10,
        paddingTop: 10,
        paddingStart: 20,
        paddingEnd: 20,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

    itemAction: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgAction: {
        width: 60,
        height: 60,
        resizeMode: 'center',
    },

    textAction: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: AppColor.purpleBrown
    },
})