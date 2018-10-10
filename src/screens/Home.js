import React from 'react'
import { View } from 'react-native'

import Header from '../components/Header'
import HomeContainer from '../containers/Home'

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render () {
    return (
      <View>
        <Header/>
        <HomeContainer/>
      </View>
    )
  }
}
