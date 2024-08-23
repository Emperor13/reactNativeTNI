import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample'
import Login from './components/Login'

const App = (): React.JSX.Element => {
  return (
    <View>
      <ProfileScreen/>
      <Login/>
    </View>
  )
}

export default App
