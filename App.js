/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, StatusBar } from 'react-native'
import { AppHeader, List, ErrorBoundary } from './components'
import { AppProvider } from './contexts'
import { Styles } from './Styles'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#004c40" />
      <AppProvider>
        <View styles={Styles.container}>
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
