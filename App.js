/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Styles } from './Styles'
import { View, StatusBar } from 'react-native'
import { AppHeader, List, ErrorBoundary } from './components'
import { AppProvider } from './contexts'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#004c40" />
      <AppProvider>
        <View style={Styles.container}>
          <AppHeader />
          <ErrorBoundary>
            <List />
          </ErrorBoundary>
        </View>
      </AppProvider>
    </>
  )
}
export default App
