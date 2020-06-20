import 'react-native'
import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AppProvider, AppContext } from '../contexts'
import { render, waitFor } from 'react-native-testing-library'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
const fakeResponse = {
  results: 'this is a test data',
}

const server = setupServer(
  rest.get(
    'https://api.nytimes.com/svc/topstories/v2/world.json',
    (req, res, ctx) => {
      return res(ctx.json(fakeResponse))
    }
  )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('consumer is able to access data from AppProvider', async () => {
  const Consumer = () => {
    const { state } = useContext(AppContext)
    return (
      <View>
        <Text>status is {state.status}</Text>
        <Text>{state.data}</Text>
      </View>
    )
  }
  const { getByText } = render(
    <AppProvider>
      <Consumer />
    </AppProvider>
  )
  await waitFor(() => {
    expect(getByText('status is success')).toBeTruthy
    expect(getByText('this is a test data')).toBeTruthy
  })
})
