import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import AppNavigator from './src/navigation/AppNavigator'

import reducer from './src/reducers/index'

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
})

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
