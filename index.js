
import { AppRegistry } from 'react-native'
import App from './App'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
YellowBox.ignoreWarnings(['Class RCTCxxModule'])
YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps is deprecated'])
YellowBox.ignoreWarnings(['Warning: componentWillUpdate is deprecated'])

AppRegistry.registerComponent('BaldHeadIslandApp', () => App)
