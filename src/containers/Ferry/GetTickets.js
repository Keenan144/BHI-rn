import React from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native'
import { refreshWidgets } from '../../actions/widget'
import { background__white } from '../../config/Colors'

import AppText from '../../components/AppText'
import Switch from '../../components/Buttons/Switch'
import TicketOption from '../../components/TicketOption'
import ClearButton from '../../components/Buttons/ClearButton'

class GetTicketsContainer extends React.Component {

  state = { loading: true, pricing: 1 }

  async getTicketPrices () {
    try {
      await this.props.refreshWidgets()
      this.setState({ loading: false })
    } catch (error) {
      console.log(error)
    }
  }

  togglePricing () {
    this.setState({ pricing: (this.state.pricing === 1 ? 2 : 1) })
  }

  render () {
    const { child, adult, senior, military} = this.props.prices
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
        <Switch fontSize={17} lineHeight={43} selectedType={this.state.pricing} titleL={'One Way'} titleR={'Round Trip'}
                onPress={() => this.togglePricing()}/>
        <View style={styles.column}>
          <TicketOption quantity={0} title={'Child'} description={'Under 8 years old'}
                        price={this.state.pricing === 1 ? child.oneWay : child.roundTrip}/>
          <TicketOption quantity={0} title={'Adult'} description={''}
                        price={this.state.pricing === 1 ? adult.oneWay : adult.roundTrip}/>
          <TicketOption quantity={0} title={'Senior'} description={'65 years and older'}
                        price={this.state.pricing === 1 ? senior.oneWay : senior.roundTrip}/>
          <TicketOption quantity={0} title={'Veteran/ Military'} description={'Must provide valid Military ID'}
                        price={this.state.pricing === 1 ? military.oneWay : military.roundTrip}/>
        </View>
        <View style={styles.orderButton}>
          <ClearButton fontSize={17} title={'Place Order'}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: background__white,
  },
  column: {
    flexDirection: 'column',
    marginVertical: 20,
  },
  orderButton: {
    position: 'absolute',
    marginHorizontal: 'auto',
    alignSelf: 'center',
    width: '100%',
    bottom: 80
  }
})

const mapStateToProps = state => ({
  widgets: state.widgets,
  prices: {
    'child': { 'oneWay': '8.00', 'roundTrip': '15.00' },
    'adult': { 'oneWay': '11.00', 'roundTrip': '20.00' },
    'senior': { 'oneWay': '9.00', 'roundTrip': '17.00' },
    'military': { 'oneWay': '5.00', 'roundTrip': '9.00' }
  }
})

const mapDispatchToProps = dispatch => ({
  refreshWidgets: () => dispatch(refreshWidgets()),
})

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(GetTicketsContainer)
