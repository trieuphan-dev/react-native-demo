import React from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { TransactionHistory } from '../../model/TransactionHistoryModel'
import AppColor from '../../resources/colors/AppColor'
import HistoryItem from './HistoryItem'
import TransactionHistoryStore from '../../stores/history/TransactionHistoryStore'

export interface TransactionHistoryListProp {
    activities: TransactionHistory[],
    historyDetailEvent: (item: TransactionHistory) => any
}

export default class TransactionHistoryList extends React.Component<TransactionHistoryListProp> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <FlatList<TransactionHistory>
                data={this.props.activities}
                ItemSeparatorComponent={() =>
                    <View style={{ width: '100%', height: 5, backgroundColor: AppColor.standardBackground }} />
                }
                renderItem={({ item }: { item: TransactionHistory }) => (
                    <TouchableOpacity onPress={() => this.props.historyDetailEvent(item)}>
                        <HistoryItem video={item} openMenu={this.props.openMenu} />
                    </TouchableOpacity>
                )}
                keyExtractor={(_, index) => index.toString()}
            />
        )
    }

}