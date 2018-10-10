import React from 'react';
import { StyleSheet, View } from 'react-native';
import { isIphoneX } from '../../utils/DeviceCheck'
import AppText from './AppText'
import Icon from './Icon'
import { background__blue_navy } from '../config/Colors'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={'profile'} style={styles.profileIcon}/>
        <AppText fontSize={34} fontWeight={'bold'} lineHeight={38} allowFontScaling={true} style={styles.title}>Bald Head Island</AppText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: background__blue_navy,
    height: 152,
    paddingTop: isIphoneX ? 44 : 22,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    alignSelf: 'flex-end',
    marginRight: 12,
  },
  title: {
    alignSelf: 'flex-end',
    width: '100%',
    paddingLeft: 12,
    textAlign: 'left'
  }
})