import {StyleSheet, View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation, route}: any): React.JSX.Element => {
  const toAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyId: 100,
    });
  };

  const toPost = () => {
    navigation.navigate("CreatePost");
  };

  const {post} = route.params;
  // route.params?.post store null to db if data not enter

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="About Us" onPress={toAbout} />

      <View style={styles.postContainer}>
        <Button title="Create Post" onPress={toPost} />
        <Text style={styles.postText}>Post:</Text>
        <Text style={styles.postContent}>{post}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
    fontWeight: "bold",
  },
});
