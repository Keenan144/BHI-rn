import { AlertIOS, Linking, NativeModules, Settings } from 'react-native'

let API_HOST

setApiHost(Settings.get('environment') || 'PROD')

export function setApiHost (env) {
  Settings.set({ environment: env })
  switch (env) {
    case 'UAT':
      API_HOST = 'http://localhost:3000'
      break
    case 'DEV':
      const { scriptURL } = NativeModules.SourceCode
      const hostname = scriptURL ? scriptURL.split('://')[1].split('/')[0].split(':')[0] : 'localhost'
      API_HOST = `http://${hostname}:3000`
      break
    case 'PROD':
    default:
      API_HOST = 'http://localhost:3000'
  }
}

export default function fetchBHI (path, opts) {
  const defaultOptions = {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'x-session-token': opts.token }
  }

  return fetch(`${API_HOST}${path}`, Object.assign(defaultOptions, opts))
    .then((response) => {
      if (response.ok || response.status === 302) {
        if (response.headers.get('content-type').startsWith('application/json')) {
          return response.json().catch(() => {
          }) // add catch when parsing non-json content
        } else {
          return response.text()
        }
      } else {
        if (response.headers.get('content-type').startsWith('application/json')) {
          if (response.status === 412) {
            return response.json()
              .then(response => {
                _sendWindowAlert(response)
              })
          } else {
            return response.json()
              .then(response => {
                const error = new Error(response.message)
                error.name = response.error
                throw error
              })
          }
        } else {
          return response.text()
            .then(text => {
              throw new Error(text)
            })
        }
      }
    })
}

export function _sendWindowAlert (error) {
  AlertIOS.alert(
    error.error,
    error.message, [
      {
        text: error.buttonText,
        onPress: () => {
          Linking.canOpenURL(error.linkingUrl).then(supported => {
            supported && Linking.openURL(error.linkingUrl)
          }, (err) => console.log(err))
        },
      }
    ]
  )
}

export function getSession (username, password) {
  const body = { password }
  const isPhoneNumber = new RegExp('^[0-9]+$')

  isPhoneNumber.test(username) ? body.phone = username : body.email = username

  return fetchBHI('/api/v1/sessions', { method: 'POST', body: JSON.stringify(body) })
}

export function getWidgetData () {

  return fetchBHI('/api/v1/getWidgets',  { method: 'GET' })
}