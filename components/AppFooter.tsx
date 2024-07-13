import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppFooter = () => {
  const hello = "Hello TNI Footer";
  const hello2 = <Text>Hello JSX! How are you?</Text>; //Store components in variable

  const isLogin = true;
  return (
      <View style={styles.bgColor}>
        <Text style={styles.myText}>
          {hello} Date: {new Date().toLocaleDateString()}
        </Text>
        {hello2}

        {isLogin && <Text>Welcome Sir!</Text>} 

        {
            isLogin == true
            ? <Text>Welcome Marry!</Text> //if
            : <Text>Please login...</Text> //else
        }
      </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  bgColor: {
    alignItems: "flex-end",
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  myText: {
    color: "gray",
  },
});
