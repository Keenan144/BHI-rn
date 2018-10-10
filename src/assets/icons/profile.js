import React from 'react'
import { G, Path } from 'react-native-svg'

export default (options) => {
  const { fillPrimary } = options
  return (
    <G fill={fillPrimary} fill-rule="evenodd">
      <Path d="M14,15 C11.2385763,15 9,12.5375661 9,9.5 C9,6.46243388 11.2385763,4 14,4 C16.7614237,4 19,6.46243388 19,9.5 C19,12.5375661 16.7614237,15 14,15 Z M24,21.7928932 C24,24.9922198 4,24.9922198 4,21.7928932 C4,18.5935666 9.6862915,16 14,16 C18.3137085,16 24,18.5935666 24,21.7928932 Z" id="path-1"></Path>
    </G>
  )
}
