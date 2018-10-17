import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue, background__blue_navy, background__white, text__white } from '../../config/Colors'

import TippyContainer from '../../containers/Tippy'

@WillFocusHook
export default class Tippy extends React.Component {
  componentWillFocus () {
    this.refs['widgetContainer'].getWrappedInstance().getWidgetData()
  }

  render () {
    return (
      <View style={styles.container}>
        <TippyContainer ref={'widgetContainer'}/>
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

Tippy.navigationOptions = {
  title: 'Tippy',
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