import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";

import {stylesProfile} from "../styles/styles";


const ProfileScreen = (): React.JSX.Element => {
  const img = require("../assets/me.png");
  const newImg = require("../assets/billy.jpg");
  const [name, setName] = useState("Apirak Chimhiran");
  const [profileImage, setProfileImage] = useState(img);

  const handleChangeName = () => {
    setName(name == "Apirak Chimhiran" ? "Bily Butcher" : "Apirak Chimhiran");
  };

  const handleChangeImage = () => {
    setProfileImage(profileImage == img ? newImg : img);
  };

  return (
    <View style={stylesProfile.container}>
      <View style={stylesProfile.profileContainer}>
        <Image style={stylesProfile.profileImage} source={profileImage} />
        <View style={stylesProfile.nameContainer}>
          <Text style={stylesProfile.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} />
          <Text></Text>
          <Button title="Change Image" onPress={handleChangeImage} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
