import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'

// Add modals here
export default createStackNavigator({
  Home,
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
})