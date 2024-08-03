import { View, Text, TextInput, Button } from "react-native";
import React from "react";

import { stylesLogin } from "../styles/styles";
const Login = () => {
  return (
    <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
      <View style={stylesLogin.container}>
        <TextInput style={stylesLogin.input} placeholder="Enter Name" />
        <TextInput style={stylesLogin.input} placeholder="Enter Password" />
        <Button title="SUBMIT"/>
      </View>
    </View>
  );
};

export default Login;
