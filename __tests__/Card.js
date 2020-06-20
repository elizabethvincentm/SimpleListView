import 'react-native'
import { Text } from 'react-native'
import React from 'react'
import { Card } from '../components'
import { render, fireEvent, act } from 'react-native-testing-library'
import { fakeResponse } from '../__testData__/FakeResponse'

test('should show card details correctly', () => {
  const { getByText } = render(<Card details={fakeResponse.results[0]} />)
  act(() => {
    expect(
      getByText(
        'Will India Side With the West Against China? A Test Is at Hand'
      )
    ).toBeTruthy
    expect(
      getByText(
        'The United States and its allies have long wanted India’s help in confronting China.'
      )
    ).toBeTruthy
  })
})
