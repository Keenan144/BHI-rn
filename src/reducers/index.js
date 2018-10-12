
import { combineReducers } from 'redux'
import login from './login'
import widgets from './widgets'

const appReducer = combineReducers({
  login,
  widgets
})

export default (state, action) => {
  if (action.type === 'CLEAR_ALL') {
    state = undefined
  }

  return appReducer(state, action)
}