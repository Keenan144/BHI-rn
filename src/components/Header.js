import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText'
import { background__blue_navy } from '../config/Colors'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppText fontSize={34} fontWeight={'bold'} lineHeight={38} allowFontScaling={true} style={styles.title}>{this.props.title}</AppText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: background__blue_navy,
    height: 58,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-end',
    width: '100%',
    paddingLeft: 12,
    textAlign: 'left'
  }
})