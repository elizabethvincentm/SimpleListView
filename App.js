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
import { Styles } from './Styles'
const App = () => {
  return (
    <AppProvider>
      <View styles={Styles.container}>
        <AppHeader />
        <List />
      </View>
    </AppProvider>
  )
}
export default App
