import 'react-native'
import React from 'react'
import { AppProvider } from '../contexts'
import { render, waitFor } from 'react-native-testing-library'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { List } from '../components'
import { fakeResponse } from '../__testData__/FakeResponse'

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

test('happy path: should display list data correctly', async () => {
  const { getAllByTestId } = render(
    <AppProvider>
      <List />
    </AppProvider>
  )
  expect(getAllByTestId('loader')).toBeTruthy
  await waitFor(() => {
    expect(getAllByTestId('card')).toHaveLength(5)
  })
})

test('error scenario: should display error content', async () => {
  server.use(
    rest.get(
      'https://api.nytimes.com/svc/topstories/v2/world.json',
      (req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({ message: 'Internal Server Error' })
        )
      }
    )
  )

  const { getByTestId, getByText } = render(
    <AppProvider>
      <List />
    </AppProvider>
  )

  expect(getByTestId('loader')).toBeTruthy
  await waitFor(() => {
    expect(getByText('Oops! Something went wrong!!')).toBeTruthy
  })
})
