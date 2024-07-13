import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

//import components
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";


export default function App(): React.JSX.Element {
  const onClickMe = () => {
    Alert.alert("Hi", "Hello React.js");
  };

  const users = [
    { id: 1001, name: "John Deacon" },
    { id: 1002, name: "Brian May" },
  ];

  const message = "Welcome!!"

  return (
    <>
      <AppHeader fName="Apirak Chimhiran" msg={message} />
      <Content msg={message}/>
      <AppFooter tni="Thai-Nichi Institute of Technology"/>
    </>
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
