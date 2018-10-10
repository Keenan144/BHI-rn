import { Dimensions, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')

export const isIphoneX = () => {
  return Platform.OS === 'ios' && (height === 812 || width === 812)
}

export const isIphone4Width = () => {
  return Platform.OS === 'ios' && (height === 320 || width === 320)
}

export const isIphoneSE = () => {
  return Platform.OS === 'ios' && (height === 568 || width === 568)
}