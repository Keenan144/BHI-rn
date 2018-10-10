import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from '../components/Header'
import HomeContainer from '../containers/Home'
import { background__blue } from '../config/Colors'

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render () {
    return (
      <View style={styles.container}>
        <Header/>
        <HomeContainer/>
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