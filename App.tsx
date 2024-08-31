import { View, Text } from 'react-native'
import React from 'react'
import FlastListExample from './components/FlatListExample'
import FlatListCallBackend from './components/FlatListCallBackend'
import NewsApp from './components/NewsApp'
import AxiosGetData from './components/AxiosGetData'
import AxiosPostData from './components/AxiosPostData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'
import ModalExample from './components/ModalExample'
import WeatherApp from './components/WeatherApp'

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <NewsApp/> */}
      {/* <AxiosGetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModalExample/> */}
      <WeatherApp/>
    </View>
  )
}

export default App
