
import { combineReducers } from 'redux'
import login from './login'

const appReducer = combineReducers({
  login
})

export default (state, action) => {
  if (action.type === 'CLEAR_ALL') {
    state = undefined
  }

  return appReducer(state, action)
}