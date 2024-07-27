import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import styles from '../styles/ProfileScreenStyles'

const ProfileScreen = (): React.JSX.Element => {
  const img = require("../assets/me.png");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={img} />
        <Text style={styles.profileName}>Apirak Chimhiran</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

