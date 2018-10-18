import React from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native'
import { refreshWidgets } from '../../actions/widget'
import { background__blue, background__white } from '../../config/Colors'

import AppText from '../../components/AppText'
import Button from '../../components/Buttons/Button'
import Navigation from '../../services/Navigation'

const { width, height } = Dimensions.get('window')

class FerryContainer extends React.Component {

  state = { loading: true }

  async getFerryData () {
    try {
      await this.props.refreshWidgets()
      this.setState({ loading: false })
    } catch (error) {
      console.log(error)
    }
  }

  render () {
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
        <View style={[styles.row, { marginTop: 0 }]}>
          <Image
            style={{
              height: height * 0.2,
              width: width,
              margin: 0,
            }}
            source={require('../../../assets/images/3322.jpg')}/>
        </View>
        <View style={styles.row}>
          <Button title={'Get Tickets'} fontSize={17} lineHeight={23} onPress={() => Navigation.navigate('GetTickets')}/>
          <Button title={'Schedule'} fontSize={17} lineHeight={23} onPress={() => console.log('Show Schedule')}/>
        </View>
        {this.props.tickets &&
        <View style={styles.row}>
          <Button title={'View My Tickets'} fontSize={17} lineHeight={23} onPress={() => console.log('View My Tickets')}/>
        </View>
        }
        <View style={styles.row}>
          <AppText fontSize={17} lineHeight={28}
                   style={{ color: background__blue, fontStyle: 'italic', textAlign: 'center' }}>
            When you board the ferry for the 20-minute ride to Bald Head Island, you leave your car behind, along with
            the stress of the mainland world.
          </AppText>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    top: 20,
    height: 200,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: background__white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
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
  widgets: state.widgets,
  tickets: null
})

const mapDispatchToProps = dispatch => ({
  refreshWidgets: () => dispatch(refreshWidgets()),
})

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(FerryContainer)
