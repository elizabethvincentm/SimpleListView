import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Styles } from '../Styles'
import { AppContext } from '../contexts'

export const ErrorHandler = () => {
  const { state } = useContext(AppContext)
  const { errorData } = state
  return (
    <View testID="error-content" style={Styles.errorView}>
      <Text style={Styles.errorText}>Oops! Something went wrong!!</Text>
      <Text style={Styles.errorSubText}>{errorData.message}</Text>
    </View>
  )
}
