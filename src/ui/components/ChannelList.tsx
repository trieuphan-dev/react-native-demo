import React from 'react'
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'

export interface ChannelListProp {
    selectChannel: (channelSelected: string, channelCurrentIndex: number) => any
}

export default class ChannelList extends React.Component<ChannelListProp> {
    channelBar?: FlatList<string> | null
    channels: string[] = ["All", "Bios", "Jobs", "Events", "Collaboration", "Social", "Knowledge"]
    channelCurrentIndex: number = 0
    channelFocusIndex: number = 0

    state = {
        channelSelected: "All"
    }

    constructor(props: any) {
        super(props)
        this.props.selectChannel(this.state.channelSelected, this.channelCurrentIndex)
    }

    didSelected = (channelSelected: string) => {
        this.setState(
            { channelSelected: channelSelected }
        )
        let channelPreviousIndex: number = this.channelCurrentIndex
        this.channelCurrentIndex = this.channels.indexOf(channelSelected)
        if (this.channelCurrentIndex > channelPreviousIndex) {
            this.channelFocusIndex =
                this.channelCurrentIndex === this.channels.length - 1 ||
                    this.channelCurrentIndex < this.channels.length / 2 ?
                    this.channelCurrentIndex : this.channelCurrentIndex + 1

        } else if (this.channelCurrentIndex < channelPreviousIndex) {
            this.channelFocusIndex =
                this.channelCurrentIndex === 0 || this.channelCurrentIndex > this.channels.length / 2 ?
                    this.channelCurrentIndex : this.channelCurrentIndex - 1
        }

        this.channelBar?.scrollToIndex({ index: this.channelFocusIndex ?? 0 })
        this.props.selectChannel(channelSelected, this.channelCurrentIndex)
    }

    render() {
        return (
            <FlatList<string>
                ref={ref => (this.channelBar = ref)}
                data={this.channels ?? []}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }: { item: string }) => (
                    <TouchableOpacity style={styles.categoryBar} onPress={() => this.didSelected(item)}>
                        <Text style={[styles.categoryBarItem,
                        this.state.channelSelected === item && { color: "black" }]}> {item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item}
            />
        )
    }
}

const styles = StyleSheet.create({
    categoryBar: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        marginHorizontal: 12
    },
    categoryBarItem: {
        fontSize: 15,
        marginBottom: 0,
        marginTop: 0,
        color: "gray"
    }
})