import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import AppText from '../AppText'
import PropTypes from 'prop-types'

import { background__blue, background__white } from '../../config/Colors'

class Switch extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.buttonL, this.props.selectedType === 1 ? styles.active : styles.inactive]}
            onPress={this.props.onPress}>
            <AppText fontSize={this.props.fontSize} fontWeight={'bold'} lineHeight={this.props.lineHeight}
                     allowFontScaling={true}
                     style={[styles.title, this.props.selectedType === 1 ? styles.active__text : styles.inactive__text]}>{this.props.titleL}</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonR, this.props.selectedType === 2 ? styles.active : styles.inactive]}
            onPress={this.props.onPress}>
            <AppText fontSize={this.props.fontSize} fontWeight={'bold'} lineHeight={this.props.lineHeight}
                     allowFontScaling={true}
                     style={[styles.title, this.props.selectedType === 2 ? styles.active__text : styles.inactive__text]}>{this.props.titleR}</AppText>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Switch.defaultProps = {
  fontSize: 17,
  lineHeight: 23,
  titleL: 'Do Something',
  titleR: 'Do Something'
}

Switch.propTypes = {
  fontSize: PropTypes.oneOf([10, 13, 15, 17, 34]),
  lineHeight: PropTypes.number,
  titleL: PropTypes.string,
  titleR: PropTypes.string,
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
  },
  buttonL: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
  },
  buttonR: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  title: {
    width: '100%',
    textAlign: 'center'
  },
  active: {
    backgroundColor: background__blue,
  },
  active__text: {
    color: background__white,
  },
  inactive: {
    backgroundColor: background__white,
    borderColor: background__blue
  },
  inactive__text: {
    color: background__blue
  },
})

export default Switch