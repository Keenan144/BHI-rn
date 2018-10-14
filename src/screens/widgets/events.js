import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue, background__blue_navy, background__white, text__white } from '../../config/Colors'

import EventContainer from '../../containers/Event'

@WillFocusHook
export default class Event extends React.Component {
  componentWillFocus () {
    this.refs['widgetContainer'].getWrappedInstance().getEventData()
  }

  render () {
    return (
      <View style={styles.container}>
        <EventContainer ref={'widgetContainer'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: background__blue,
  }
})

Event.navigationOptions = {
  title: 'Upcoming Events',
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