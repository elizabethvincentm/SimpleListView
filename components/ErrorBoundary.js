import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Styles } from '../Styles'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <View testID="error-boundary-content" style={Styles.errorView}>
          <Text style={Styles.errorText}>Oops! Something went wrong!!</Text>
        </View>
      )
    }

    return this.props.children
  }
}
