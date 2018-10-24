import React from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { refreshWidgets } from '../../actions/widget'
import { background__white } from '../../config/Colors'

import AppText from '../../components/AppText'
import Switch from '../../components/Buttons/Switch'
import TicketOption from '../../components/TicketOption'
import ClearButton from '../../components/Buttons/ClearButton'

class GetTicketsContainer extends React.Component {
  state = {
    loading: true,
    orderTotal: 0,
    pricing: 1,
    childTickets: 0,
    adultTickets: 0,
    seniorTickets: 0,
    militaryTickets: 0
  }

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

  orderTotal (v, ticket) {
    let orderTotal = this.state.orderTotal
    switch (this.state.pricing) {
      case 2:
        orderTotal = orderTotal + (ticket.roundTrip * v)
        break
      case 1:
      default:
        orderTotal = orderTotal + (ticket.oneWay * v)
    }

    orderTotal = orderTotal * 1.08

    this.setState({ orderTotal })
  }

  render () {
    const { child, adult, senior, military } = this.props.prices
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
          <TicketOption quantity={this.state.childTickets} _onSelect={(v) => {
            this.orderTotal(v, child)
            this.setState({ childTickets: v })
          }} items={child.items} title={'Child'} description={'Under 8 years old'}
                        price={this.state.pricing === 1 ? child.oneWay : child.roundTrip}/>
          <TicketOption quantity={this.state.adultTickets} _onSelect={(v) => {
            this.orderTotal(v, adult)
            this.setState({ adultTickets: v })
          }} items={adult.items} title={'Adult'} description={''}
                        price={this.state.pricing === 1 ? adult.oneWay : adult.roundTrip}/>
          <TicketOption quantity={this.state.seniorTickets} _onSelect={(v) => {
            this.orderTotal(v, senior)
            this.setState({ seniorTickets: v })
          }} items={senior.items} title={'Senior'} description={'65 years and older'}
                        price={this.state.pricing === 1 ? senior.oneWay : senior.roundTrip}/>
          <TicketOption quantity={this.state.militaryTickets} _onSelect={(v) => {
            this.orderTotal(v, military)
            this.setState({ militaryTickets: v })
          }} items={military.items} title={'Veteran/ Military'} description={'Must provide valid Military ID'}
                        price={this.state.pricing === 1 ? military.oneWay : military.roundTrip}/>
        </View>
        <View style={styles.orderButton}>
          <ClearButton fontSize={17} title={'Place Order'}/>
          <Text>Order Total: {this.state.orderTotal}</Text>
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
    'child': {
      'quantity': 0, 'oneWay': '8.00', 'roundTrip': '15.00', 'items': [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
        { label: '11', value: 11 },
        { label: '12', value: 12 },
        { label: '13', value: 13 },
        { label: '14', value: 14 },
        { label: '15', value: 15 },
        { label: '16', value: 16 },
        { label: '17', value: 17 },
        { label: '18', value: 18 },
        { label: '19', value: 19 },
        { label: '20', value: 20 }
      ]
    },
    'adult': {
      'quantity': 0, 'oneWay': '11.00', 'roundTrip': '20.00', 'items': [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
        { label: '11', value: 11 },
        { label: '12', value: 12 },
        { label: '13', value: 13 },
        { label: '14', value: 14 },
        { label: '15', value: 15 },
        { label: '16', value: 16 },
        { label: '17', value: 17 },
        { label: '18', value: 18 },
        { label: '19', value: 19 },
        { label: '20', value: 20 }
      ]
    },
    'senior': {
      'quantity': 0, 'oneWay': '9.00', 'roundTrip': '17.00', 'items': [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
        { label: '11', value: 11 },
        { label: '12', value: 12 },
        { label: '13', value: 13 },
        { label: '14', value: 14 },
        { label: '15', value: 15 },
        { label: '16', value: 16 },
        { label: '17', value: 17 },
        { label: '18', value: 18 },
        { label: '19', value: 19 },
        { label: '20', value: 20 }
      ]
    },
    'military': {
      'quantity': 0, 'oneWay': '5.00', 'roundTrip': '9.00', 'items': [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
        { label: '11', value: 11 },
        { label: '12', value: 12 },
        { label: '13', value: 13 },
        { label: '14', value: 14 },
        { label: '15', value: 15 },
        { label: '16', value: 16 },
        { label: '17', value: 17 },
        { label: '18', value: 18 },
        { label: '19', value: 19 },
        { label: '20', value: 20 }
      ]
    }
  }
})

const mapDispatchToProps = dispatch => ({
  refreshWidgets: () => dispatch(refreshWidgets()),
})

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(GetTicketsContainer)
