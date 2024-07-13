import { StyleSheet, Text, View } from "react-native";
import React from "react";

import styles from "../styles/AppHeaderStyles";
//create type of variables for props
type AppHeaderProps = {
  fName: string;
  msg: string; /*? = optional props */
};

const AppHeader = ({ fName, msg }: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={styles.titleBg}>
      <Text style={styles.headerText}>
        {fName}
      </Text>
      <Text style={styles.subtitleText}> {msg} </Text>
    </View>
  );
};

export default AppHeader;
