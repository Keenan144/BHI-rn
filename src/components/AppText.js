import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { text__white } from '../config/Colors'
import PropTypes from 'prop-types'

class AppText extends Component {
  render () {
    return (
      <Text
        allowFontScaling={this.props.allowFontScaling}
        style={[styles.appText, this.props.style, {
          fontSize: this.props.fontSize,
          fontWeight: this.props.fontWeight,
          lineHeight: this.props.lineHeight,
        }]}
        onPress={this.props.onPress}
        numberOfLines={this.props.numberOfLines}
      >{this.props.children}</Text>
    )
  }
}

AppText.defaultProps = {
  allowFontScaling: false,
  fontSize: 13,
  fontWeight: 'normal',
  lineHeight: 23,
}

AppText.propTypes = {
  allowFontScaling: PropTypes.bool,
  fontSize: PropTypes.oneOf([10, 13, 15, 17, 34]),
  fontWeight: PropTypes.oneOf(['light', 'normal', 'bold']),
  lineHeight: PropTypes.number,
}

const styles = StyleSheet.create({
  appText: {
    color: text__white
  }
})

export default AppText