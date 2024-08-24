import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

type data = {
  name: string;
  email: string;
};

const AxiosPostData = (): React.JSX.Element => {
  const [formData, setformData] = useState({ name: "", email: "" }); //formData contain 2 values (name, email). default values = ''

  const handleInputChange = (key: string, value: string) => {
    
    setformData((prevState) => ({ ...prevState, [key]: value })); //... = access all atributes and values | [key]:value = values you want to change.
  };

  const url = `https://jsonplaceholder.typicode.com/users`;
  const handleSubmit = async () => {
    try {
      const res = await axios.post(url, formData);
      Alert.alert(
        "User Created",
        `
                ID: ${res.data.id}
                Name: ${res.data.name}
                Email: ${res.data.email}
                `
      );
    } catch {
      Alert.alert("Error", "Failed to create user...");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
};

export default AxiosPostData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
