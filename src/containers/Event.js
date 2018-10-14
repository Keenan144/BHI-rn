import React from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'
import { refreshWidgets } from '../actions/widget'
import { background__blue } from '../config/Colors'
import AppText from '../components/AppText'

class EventContainer extends React.Component {

  state = { loading: true }

  async getEventData () {
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
          <AppText style={{ textAlign: 'center' }}>Loading...</AppText>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <AppText>Hello</AppText>
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

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(EventContainer)
