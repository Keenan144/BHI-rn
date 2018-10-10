import React from 'react'
import { G, Path } from 'react-native-svg'

export default (options) => {
  const { fillPrimary } = options
  return (
    <G fill={fillPrimary} fill-rule="evenodd">
      <Path d="m7.14160493 25.5466h17.71679997l-8.8584-17.7168zm19.65839997 2.4h-21.59999997c-.4164 0-.8028-.216-1.0212-.5688-.2184-.354-.2376-.7956-.0528-1.1676l10.79999997-21.6c.4068-.8136 1.74-.8136 2.1468 0l10.8 21.6c.186.372.1668.8136-.0528 1.1676-.2184.3528-.6036.5688-1.02.5688z" />
      <Path d="m17.2 20.8h-2.4v-7.2h2.4z" />
      <Path d="m16 25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
    </G>
  )
}