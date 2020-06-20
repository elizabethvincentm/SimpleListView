import React, { useContext } from 'react'
import { View, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import { Card } from './Card'
import { AppContext } from '../contexts'
import { ErrorHandler } from './ErrorHandler'

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
              size="large"
              progressBackgroundColor="#00796b"
              onRefresh={() => setState({ ...state, refreshing: true })}
            />
          }
          keyExtractor={(item, index) => JSON.stringify(index)}
        />
      )}
      {status === 'loading' && (
        <ActivityIndicator testID="loader" size="large" color="#00796b" />
      )}
      {status === 'error' && <ErrorHandler />}
    </View>
  )
}
