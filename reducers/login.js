const login = (state = {}, action) => {
  switch(action.type) {
    case 'SET_EMAIL':
      return Object.assign(state, { email: action.email})
    case 'SET_PASSWORD':
      return Object.assign(state, { password: action.password})
    case 'SET_PHONE':
      return Object.assign(state, { phone: action.phone})
    case 'SET_CODE':
      return Object.assign(state, { code: action.code})
    default:
      return state
  }
}

export default login