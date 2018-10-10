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
import Widget from '../components/Widget'


export default class Home extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.row}>
            <Widget style={styles.widget__small} title={"Tippy"} source={require('../../assets/images/ec047be62531be2a93587a3a60bf3870.jpg')}/>
            <Widget style={styles.widget__small} title={"BHI Ferry"} source={require('../../assets/images/3322.jpg')}/>
          </View>
          <View style={styles.row}>
            <Widget style={styles.widget__large} title={"Island News"} source={require('../../assets/images/ocean-storm-matt-dobson.jpg')}/>
          </View>
          <View style={styles.row}>
            <Widget style={styles.widget__small} title={"Events"} source={require('../../assets/images/crop3.jpg')}/>
            <Widget style={styles.widget__small} title={"Island Assistance"} source={require('../../assets/images/photo-1502786965697-c531beea0b4a.jpeg')}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: background__blue,
  },
  row: {
    flexDirection: 'row'
  },
  widget__small: {
    width: 200,
    height: 150,
    flex: 1,
  },
  widget__large: {
    width: 400,
    height: 300,
    flex: 1,
  },
})
