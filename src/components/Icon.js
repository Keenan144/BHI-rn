import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Svg from 'react-native-svg'
import icons from '../assets/icons'

class Icon extends Component {
  render () {
    const { width = 32, height = 32, fill = '#fff' } = this.props
    const fillPrimary = this.props.fillPrimary ? this.props.fillPrimary : fill
    const fillSecondary = this.props.fillSecondary

    return (
      <View style={[styles.container, this.props.style]}>
        <Svg width={width} height={height} viewBox="0 0 32 32">
          { icons[this.props.name]({ fillPrimary, fillSecondary }) }
        </Svg>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Icon