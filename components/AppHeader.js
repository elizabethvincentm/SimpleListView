import React from 'react'
import { View, Text } from 'react-native'
import { Styles } from '../Styles'

export const AppHeader = () => {
  return (
    <View style={Styles.headerView}>
      <Text style={Styles.headerText}>Top Stories</Text>
    </View>
  )
}
