import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import AppText from './AppText'
import { background__blue } from '../config/Colors'

export default class TicketOption extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput>{this.props.quantity}</TextInput>
          <AppText fontSize={17} fontWeight={'bold'} lineHeight={23} allowFontScaling={true} style={styles.title}>{this.props.title}</AppText>
          <AppText fontSize={15} fontWeight={'bold'} lineHeight={21} allowFontScaling={true} style={styles.title}>${this.props.price}</AppText>
        </View>
        <View style={styles.row}>
          <AppText fontSize={13} fontWeight={'bold'} lineHeight={13} allowFontScaling={true} style={styles.title}>{this.props.description}</AppText>
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