import React, { useState, useEffect } from 'react'
import axios from 'axios'
export const AppContext = React.createContext(null)

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    status: 'loading',
    data: null,
    refreshing: false,
    errorData: null,
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Gl7cNmF4SSSmsDvLZQLuWiZPzf09DupT',
          { timeout: 60 * 1 * 1000 }
        )
        setState((prev) => ({
          ...prev,
          status: 'success',
          data: response.data.results,
        }))
      } catch (error) {
        setState((prev) => ({
          ...prev,
          status: 'error',
          errorData: error,
        }))
      }
    }
    fetchData()
    state.refreshing &&
      setTimeout(() => setState({ ...state, refreshing: false }))
  }, [state.refreshing])

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}
