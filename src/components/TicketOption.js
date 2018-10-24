import React from 'react'
import { StyleSheet, View } from 'react-native'

import AppText from './AppText'
import RNPickerSelect from 'react-native-picker-select'
import { background__blue } from '../config/Colors'

export default class TicketOption extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <RNPickerSelect
            placeholder={{
              label: `${this.props.quantity}`,
              value: this.props.quantity,
            }}
            items={this.props.items}
            onValueChange={(value) => this.props._onSelect(value)}
            style={{ ...pickerSelectStyles }}
            value={this.props.quantity}
          />
          <AppText fontSize={17} fontWeight={'bold'} lineHeight={23} allowFontScaling={true}
                   style={styles.title}>{this.props.title}</AppText>
          <AppText fontSize={15} fontWeight={'bold'} lineHeight={21} allowFontScaling={true}
                   style={styles.title}>${this.props.price}</AppText>
        </View>
        <View style={styles.row}>
          <AppText fontSize={13} fontWeight={'bold'} lineHeight={13} allowFontScaling={true}
                   style={styles.title}>{this.props.description}</AppText>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    marginVertical: 1,
    marginHorizontal: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 1
  },
  title: {
    color: background__blue,
    textAlign: 'center'
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 17,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
})