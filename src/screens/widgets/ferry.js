import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue, background__blue_navy, background__white, text__white } from '../../config/Colors'

import FerryContainer from '../../containers/Ferry/FerryHome'
import Header from '../../components/Header'

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

Ferry.navigationOptions = {
  title: 'Ferry',
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