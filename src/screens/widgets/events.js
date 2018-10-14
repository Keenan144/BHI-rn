import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue } from '../../config/Colors'

import EventContainer from '../../containers/Event'

@WillFocusHook
export default class Tippy extends React.Component {
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