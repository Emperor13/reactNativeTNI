import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import styles from '../styles/ContentStyle'

type ContentProps = {
    msg: string;
}
const Content = ({msg}: ContentProps) => {

    const onClickAlert = () => {
        Alert.alert("Hello", "Input Your Fullname");
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
      <Button title="Click Me" onPress={onClickAlert} color="lightgreen"/>
    </View>
  )
}

export default Content
