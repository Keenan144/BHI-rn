import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue } from '../../config/Colors'

import FerryContainer from '../../containers/Ferry'

@WillFocusHook
export default class Ferry extends React.Component {
  componentWillFocus () {
    this.refs['ferryContainer'].getWrappedInstance().getFerryData()
  }

  render () {
    return (
      <View style={styles.container}>
        <FerryContainer ref={'ferryContainer'}/>
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