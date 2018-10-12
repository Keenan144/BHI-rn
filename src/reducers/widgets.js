const login = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_WIDGETS':
      return Object.assign(state, {
        tippy: action.data.Tippy,
        ferry: action.data.Ferry,
        news: action.data.News,
        events: action.data.Events,
        assistance: action.data.Assistance
      })
    default:
      return state
  }
}

export default login