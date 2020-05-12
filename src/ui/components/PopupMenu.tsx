import React from 'react'
import Modal from "react-native-modal"
import AppColor from './../../resources/colors/AppColor'
import {
  SafeAreaView, View, Text, StyleSheet,
  TouchableOpacity, FlatList, TouchableWithoutFeedback
} from 'react-native'
import { MenuItem } from '../../model/GeneralModel'

export interface PopupMenuProp<T> {
  menuItems: MenuItem[]
  handleActionCall: (action: string, data: T) => void
  data: T
}

class PopupMenu<T> extends React.Component<PopupMenuProp<T>> {

  constructor(props: any) {
    super(props)
  }

  state = {
    isModalVisible: false
  }

  toggleMenu = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  render() {
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        backdropOpacity={0.3}
        style={{ margin: 0 }}
      >
        <TouchableWithoutFeedback onPress={() => this.toggleMenu()}>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
            <View style={styles.container}>
              <FlatList<MenuItem>
                data={this.props.menuItems}
                ItemSeparatorComponent={() =>
                  <View style={{ width: '100%', height: 1, backgroundColor: AppColor.standardBackground }} />
                }
                renderItem={({ item }: { item: MenuItem }) => (
                  <View style={{ flex: 1, height: 50 }}>
                    <TouchableOpacity style={styles.row}
                      onPress={() => {
                        this.toggleMenu()
                        return this.props.handleActionCall(item.action, this.props.data)
                      }
                      }>
                      <Text style={styles.menuItem}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  row: {
    paddingLeft: 50,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  borderTop: {
    borderTopColor: '#f7f7f7',
    borderTopWidth: 1
  },
  menuItem: {
    fontSize: 17,
    fontWeight: '300'
  }
})

export default PopupMenu