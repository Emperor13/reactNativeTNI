import { View, Text } from 'react-native'
import React from 'react'
import FlastListExample from './components/FlatListExample'
import FlatListCallBackend from './components/FlatListCallBackend'
import NewsApp from './components/NewsApp'
import AxiosGetData from './components/AxiosGetData'
import AxiosPostData from './components/AxiosPostData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <NewsApp/> */}
      {/* <AxiosGetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      <WeatherBangkok/>
    </View>
  )
}

export default App
