import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue } from '../../config/Colors'

import AssistanceContainer from '../../containers/Assistance'

@WillFocusHook
export default class Tippy extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <AssistanceContainer ref={'widgetContainer'}/>
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