import React, { useContext } from 'react'
import { View, ActivityIndicator, FlatList, RefreshControl } from 'react-native'
import { Card } from './Card'
import { AppContext } from '../contexts'

export const List = () => {
  const { state, setState } = useContext(AppContext)
  const { status, data, refreshing } = state

  return (
    <View>
      {status === 'success' && (
        <FlatList
          data={data}
          renderItem={({ item }) => <Card details={item} />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => setState({ ...state, refreshing: true })}
            />
          }
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      )}
      {status === 'loading' && (
        <ActivityIndicator size="large" color="dodgerblue" />
      )}
    </View>
  )
}
