import 'react-native'
import { Text } from 'react-native'
import React from 'react'
import { AppHeader } from '../components'
import { render, act } from 'react-native-testing-library'

test('should show app header details correctly', () => {
  const { getByText } = render(<AppHeader />)
  act(() => {
    expect(getByText('Top Stories')).toBeTruthy
  })
})
