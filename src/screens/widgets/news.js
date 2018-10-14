import React from 'react'
import { StyleSheet, View } from 'react-native'
import WillFocusHook from '../_decorators/WillFocusHook'
import { background__blue } from '../../config/Colors'

import NewsContainer from '../../containers/News'

@WillFocusHook
export default class News extends React.Component {
  componentWillFocus () {
    this.refs['widgetContainer'].getWrappedInstance().getNewsData()
  }

  render () {
    return (
      <View style={styles.container}>
        <NewsContainer ref={'widgetContainer'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: background__blue,
  }
})