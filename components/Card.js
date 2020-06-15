import React from 'react'
import { Image, Text, Linking, TouchableOpacity } from 'react-native'

export const Card = ({ details }) => {
  console.log(
    details.multimedia.filter((media) => media.format === 'thumbLarge')[0].url
  )
  return (
    <TouchableOpacity onPress={() => Linking.openURL(details.url)}>
      <Text>{details.title}</Text>
      <Text>{details.abstract}</Text>
      <Image
        source={{
          uri: details.multimedia.filter(
            (media) => media.format === 'thumbLarge'
          )[0].url,
        }}
        style={{ width: 150, height: 150 }}
      />
    </TouchableOpacity>
  )
}
