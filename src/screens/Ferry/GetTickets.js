import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue_navy, background__white, text__white } from '../../config/Colors'
import GetTicketsContainer from '../../containers/Ferry/GetTickets'


@WillFocusHook
export default class GetTickets extends React.Component {
  componentWillFocus () {
    this.refs['getTicketsContainer'].getWrappedInstance().getTicketPrices()
  }

  render () {
    return (
      <View style={styles.container}>
        <GetTicketsContainer ref={'getTicketsContainer'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: background__white,
  }
})

GetTickets.navigationOptions = {
  title: 'Order Tickets',
  headerTintColor: background__white,
  headerTitleStyle: {
    fontSize: 22,
    fontWeight: '400',
    color: text__white,
  },
  headerStyle: {
    backgroundColor: background__blue_navy,
    borderBottomColor: background__blue_navy,
    margin: 11,
  }
}