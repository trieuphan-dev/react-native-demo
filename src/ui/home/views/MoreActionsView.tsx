import * as React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { observer, inject } from "mobx-react"
import MoreActionsStore from '../../../stores/home/MoreActionsStore'
import AppColor from '../../../resources/colors/AppColor'

export interface Props {
    moreActionsStore?: MoreActionsStore
}

@inject("moreActionsStore")
@observer
class MoreActionsView extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        var actions = [];
        for (var i = 0; i < 4; i++) {
            actions.push(<View key={i} style={styles.itemAction}>
                <Image source={this.props.moreActionsStore?.images[i]} style={styles.imgAction}></Image>
                <Text style={styles.textAction}>{this.props.moreActionsStore?.titles[i]}</Text>
            </View>)
        }
        return (
            <View style={styles.mainActionsArea}>
                {actions}
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
        width: '100%',
        padding: 15,
        shadowColor: "black",
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 10,
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