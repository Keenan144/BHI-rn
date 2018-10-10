import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { Provider } from 'react-redux'

import AppNavigator from './src/navigators/RootStack'
import Navigation from './src/services/Navigation'

import reducers from './src/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(),
  applyMiddleware(
    thunkMiddleware,
  )
)
export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="light-content"/>}
        <Provider store={store}>
          <AppNavigator ref={navigatorRef => Navigation.setTopLevelNavigator(navigatorRef)}/>
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
