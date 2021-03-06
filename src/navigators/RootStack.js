import React from 'react'
import { createStackNavigator } from 'react-navigation'

import Assistance from '../screens/widgets/assistance'
import Events from '../screens/widgets/events'
import Home from '../screens/Home'
import Ferry from '../screens/widgets/ferry'
import GetTickets from '../screens/Ferry/GetTickets'
import News from '../screens/widgets/news'
import Tippy from '../screens/widgets/tippy'

import { background__blue_navy, text__white } from '../config/Colors'

// Add modals here
export default createStackNavigator({
  Assistance,
  Events,
  Home,
  Ferry,
  GetTickets,
  News,
  Tippy,
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerBackTitle: null,
    headerTitleStyle: {
      textAlign: 'left',
      fontSize: 32,
      fontWeight: '400',
      color: text__white,
    },
    headerStyle: {
      backgroundColor: background__blue_navy,
      margin: 11,
      borderBottomColor: background__blue_navy
    }
  }
})