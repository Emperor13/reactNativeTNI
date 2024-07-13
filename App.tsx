import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

//import components
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

export default function App():React.JSX.Element {

  const onClickMe = () => {
    Alert.alert("Hi" , "Hello React.js");
  }

  const users = [
    {id: 1001, name: 'John Deacon'},
    {id: 1002, name: 'Brian May'},
  ]
  
  return (
    <View style={styles.container}>
      <AppHeader title="This is Header " year={2024} />
      <Text>Hello React Native</Text>
      {users.map((data, index) => {
        return(
          <Text key={data.id}>
            No.{index + 1} ID: {data.id} Name: {data.name}
          </Text>
        )
      })}


      <Button
        title="Click me"
        color="lightblue"
        onPress={onClickMe}

        /*onPress={() => {
          Alert.alert("Surprise!!", "React Native is fun!!");
        }}*/

      />

      <StatusBar style="auto" />
      <AppFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    marginRight: 20,
    justifyContent: "center",
  },
});


