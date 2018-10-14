import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from './_decorators/WillFocusHook'

import Header from '../components/Header'
import HomeContainer from '../containers/Home'
import { background__blue } from '../config/Colors'

@WillFocusHook
export default class Home extends React.Component {
  componentWillFocus () {
    this.refs['homeContainer'].getWrappedInstance().getHomeScreenData()
  }

  render () {
    return (
      <View style={styles.container}>
        <HomeContainer ref={'homeContainer'}/>
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

Home.navigationOptions = {
  title: 'Bald Head Island'
}