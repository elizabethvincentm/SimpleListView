import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card } from './Card'
import { AppContext } from '../contexts'

export const List = () => {
  const { state } = useContext(AppContext)
  const { status, data } = state
  return (
    <View>
      {status === 'success' && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Card details={item} />}
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      )}
      {status === 'loading' && <Text>Loading</Text>}
    </View>
  )
}
