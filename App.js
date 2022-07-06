import React from 'react'
import { View, Text } from 'react-native'
import BottomTab from './navigation/BottomTab'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {
  render() {
    return <SafeAreaProvider><BottomTab /></SafeAreaProvider>
  }
}