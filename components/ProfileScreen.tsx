import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";

import styles from "../styles/ProfileScreenStyles";

const ProfileScreen = (): React.JSX.Element => {
  const img = require("../assets/me.png");

  const [name, setName] = useState("Apirak Chimhiran");
  const [profileImage, setProfileImage] = useState(img);

  const handleChangeName = () => {
    setName("Bily Butcher");
  };

  const handleChangeImage = () => {
    const newImg = require("../assets/billy.jpg");
    setProfileImage(newImg);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <View style={styles.nameContainer}>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} />
          <Text></Text>
          <Button title="Change Image" onPress={handleChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
