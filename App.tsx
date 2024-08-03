import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import { stylesPractice } from "./styles/styles";

//import components
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  const [fName, setfName] = useState("");
  const [msg, setMsg] = useState("Message from App.tsx");
  const [footerMsg, setFooterMsg] = useState(
    "Thai-Nichi Institute of Technology"
  );

  const handleBtnClick = () => {
    Alert.alert("Hello", `Input your fullname : ${fName}`);
  }

  useEffect(() => {
    console.log("Component has mounted...");
  }, []);

  useEffect(() => {
    console.log(`Fullname has been changed to : ${fName}`);
  }, [fName]); //run when fName changes

  return (
    <View style={styles.container}>
      <AppHeader fName={fName} msg={msg} />
      
      <Content msg={msg} onButtonClick={handleBtnClick}/>
      <AppFooter tni={footerMsg} />
      <View style={{ alignItems: "center", marginTop: 10}}>
      <Text >{fName}</Text>
        <TextInput
          style={stylesPractice.input}
          placeholder="Enter fullname"
          value={fName}
          onChangeText={setfName}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
