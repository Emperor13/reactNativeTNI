import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


//create type of variables for props
type AppHeaderProps = {
    title: string,
    year?: number, /*? = optional props */
}

const AppHeader = ({title, year}: AppHeaderProps): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.titleBg}>
        {title} 
        {year && year + 543}
      </Text>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    titleBg: {
        backgroundColor: 'lightgreen',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "green"
    }
})