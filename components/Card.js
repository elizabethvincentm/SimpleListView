import React from 'react'
import { Image, Text, Linking, TouchableOpacity } from 'react-native'
import { Styles } from '../Styles'

export const Card = ({ details }) => {
  return (
    <TouchableOpacity
      style={Styles.card}
      onPress={() => Linking.openURL(details.url)}
    >
      <Text style={Styles.cardTitle}>{details.title}</Text>
      <Text style={Styles.cardDesc}>{details.abstract}</Text>
      {details.multimedia && (
        <Image
          source={{
            uri: (details.multimedia || []).filter(
              (media) => media.format === 'superJumbo'
            )[0].url,
          }}
          style={Styles.cardImage}
        />
      )}
    </TouchableOpacity>
  )
}
