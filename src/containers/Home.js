import React from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import { background__blue } from '../config/Colors'
import Widget from '../components/Widget'
import { refreshWidgets } from '../actions/widget'
import AppText from '../components/AppText'

class HomeContainer extends React.Component {

  state = { loading: true }

  async getHomeScreenData () {
    try {
      await this.props.refreshWidgets()
      this.setState({ loading: false })
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    const { tippy, ferry, news, events, assistance } = this.props.widgets
    if (this.state.loading) {
      return (
        <View>
          <AppText style={{textAlign: 'center'}}>Loading...</AppText>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.row}>
            <Widget style={styles.widget__small} title={tippy.title}
                    source={require(`../../assets/images/ec047be62531be2a93587a3a60bf3870.jpg`)}/>
            <Widget style={styles.widget__small} title={ferry.title} source={require('../../assets/images/3322.jpg')}/>
          </View>
          <View style={styles.row}>
            <Widget style={styles.widget__large} title={news.title}
                    source={require('../../assets/images/ocean-storm-matt-dobson.jpg')}/>
          </View>
          <View style={styles.row}>
            <Widget style={styles.widget__small} title={events.title} source={require('../../assets/images/crop3.jpg')}/>
            <Widget style={styles.widget__small} title={assistance.title}
                    source={require('../../assets/images/photo-1502786965697-c531beea0b4a.jpeg')}/>
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

const mapStateToProps = state => ({
  widgets: state.widgets
})

const mapDispatchToProps = dispatch => ({
  refreshWidgets: () => dispatch(refreshWidgets()),
})

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(HomeContainer)
