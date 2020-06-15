/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View } from 'react-native'
import { AppHeader, List } from './components'
import { AppProvider } from './contexts'
const App = () => {
  return (
    <AppProvider>
      <View>
        <AppHeader />
        <List />
      </View>
    </AppProvider>
  )
}
export default App
