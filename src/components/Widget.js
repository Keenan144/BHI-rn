import React, { Component } from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

class Widget extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.container, this.props.style]}>
        <ImageBackground
          style={{
            height: '100%',
            width: '100%',
            margin: 0,
          }}
          source={this.props.source}/>
        <View style={styles.overlay}/>
        <AppText fontSize={34} lineHeight={34}
                 style={{ position: 'absolute', top: 10, left: 10 }}>{this.props.title}</AppText>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.12,
    width: '100%',
    height: '100%',
  }
})

export default Widget