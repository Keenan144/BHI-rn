import { NavigationActions, StackActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator (navigatorRef) {
  _navigator = navigatorRef

}

function navigate (routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

function back () {
  _navigator.dispatch(
    NavigationActions.back()
  )
}

function reset () {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      key: 'StackRouterRoot',
      actions: [NavigationActions.navigate({ routeName: 'AuthSwitch' })]
    })
  )
}

function setParams (params, key) {
  _navigator.dispatch(
    NavigationActions.setParams({ params, key })
  )
}

function getCurrentRoute () {
  let route = _navigator.state.nav.routes[_navigator.state.nav.routes.length - 1]
  while (route.index !== undefined) route = route.routes[route.index]
  return route
}

export default {
  navigate,
  setTopLevelNavigator,
  back,
  reset,
  setParams,
  getCurrentRoute
}