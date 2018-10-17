import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'

import AppText from '../AppText'
import PropTypes from 'prop-types'

import { background__blue } from '../../config/Colors'

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <AppText fontSize={this.props.fontSize} fontWeight={'bold'} lineHeight={this.props.lineHeight} allowFontScaling={true} style={styles.title}>{this.props.title}</AppText>
      </TouchableOpacity>
    )
  }
}

Button.defaultProps = {
  fontSize: 17,
  lineHeight: 23,
  title: 'Do Something'
}

Button.propTypes = {
  fontSize: PropTypes.oneOf([10, 13, 15, 17, 34]),
  lineHeight: PropTypes.number,
  title: PropTypes.string,
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 180,
    height: 50,
    borderRadius: 5,
    backgroundColor: background__blue
  },
  title: {
    width: '100%',
    textAlign: 'center'
  }
})

export default Button