export const LOGIN = 'LOGIN'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export function login () {
  console.log('actions/index.js login')
  try {
    dispatch(requestLogin())
  } catch (error) {
    dispatch(requestFailed('something went wrong: "actions/index.js login"'))
  }
}

export const requestLogin = () => ({
  type: LOGIN
})

export function requestFailed (status) {
  return {
    type: LOGIN_FAILED,
    status,
    received_at: Date.now()
  }
}