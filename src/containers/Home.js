import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { background__blue } from '../config/Colors'


export default class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background__blue,
  },
})
