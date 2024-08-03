import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState, useEffect } from "react";

// import style
import { stylesPractice } from "../styles/styles";

type ContentProps = {
  msg: string;
  fName: string;
};
const Content = ({ msg, fName }: ContentProps) => {
  const [displayFName, setDisplayFName] = useState("");

  useEffect(() => {
    setDisplayFName(fName);
  }, [fName]); //to update fName to latest value

  const onClickAlert = () => {
    Alert.alert("Hello", `Input your fullname : ${displayFName}`);
  };

  return (
    <View style={stylesPractice.container}>
      <Text style={stylesPractice.text}>{msg}</Text>
      <Text style={stylesPractice.text}>{displayFName}</Text>
      <Button title="Click Me" onPress={onClickAlert} color="lightgreen" />
    </View>
  );
};

export default Content;
