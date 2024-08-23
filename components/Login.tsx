import { View, Text, TextInput, Button, Alert} from "react-native";
import React, { useState } from "react";

import { stylesLogin } from "../styles/styles";
const Login = ():React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email);
  }

  const submitHandler = () => {
    let errMsg = "";
    if(!name) {
      errMsg += "Please Enter Name\n";
    }

    if(!email) {
      errMsg += "Please Enter Email\n";
    } else if (!validateEmail(email)) {
      errMsg += "Invalid Email Format\n";
    }

    if (errMsg) {
      Alert.alert("Error", errMsg.trim(), [{text: "OK"}]);
      return;
    }
    Alert.alert("Alert", "Success", [{text: "OK"}]);
  }
  return (
    <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
      <View style={stylesLogin.container}>
        <TextInput style={stylesLogin.input} placeholder="Enter Name" 
        value={name}
        onChangeText={setName}/>
        <TextInput style={stylesLogin.input} placeholder="Enter Email" 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}/>
        <TextInput style={stylesLogin.input} placeholder="Enter Password" 
        value={pass}
        onChangeText={setPass}
        secureTextEntry={true}/>
        <Button title="SUBMIT" onPress={submitHandler}/>
      </View>
    </View>
  );
};

export default Login;
