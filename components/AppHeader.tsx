import { StyleSheet, Text, View } from "react-native";
import React from "react";

//import style
import {stylesPractice} from "../styles/styles";

//create type of variables for props
type AppHeaderProps = {
  fName: string;
  msg: string; /*? = optional props */
};

const AppHeader = ({ fName, msg }: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={stylesPractice.titleBg}>
      <Text style={stylesPractice.headerText}>
        {fName}
      </Text>
      <Text style={stylesPractice.subtitleText}> {msg} </Text>
    </View>
  );
};

export default AppHeader;
