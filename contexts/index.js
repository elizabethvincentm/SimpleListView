import React, { useState, useEffect } from 'react'
export const AppContext = React.createContext(null)

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({ status: 'idle', data: null })
  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ status: 'loading', data: prev.data }))
      try {
        const response = await fetch(
          'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Gl7cNmF4SSSmsDvLZQLuWiZPzf09DupT'
        )
        const data = await response.json()
        setState({ status: 'success', data })
      } catch (error) {
        console.error('Error:', error)
        setState((prev) => ({ status: 'error', data: prev.data }))
      }
    }
    fetchData()
  }, [])

  return <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
}
