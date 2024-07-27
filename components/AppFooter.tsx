import { StyleSheet, Text, View } from "react-native";
import React from "react";

//import style
import styles from "../styles/AppFooterStyles";

type AppFooterProps = {
    tni: string,
}
const AppFooter = ({tni}:AppFooterProps) => {

  return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {tni}
        </Text>
      </View>
       

         /* {isLogin && <Text>Welcome Sir!</Text>} 

        {
            isLogin == true
            ? <Text>Welcome Marry!</Text> //if
            : <Text>Please login...</Text> //else
        } */
      
  );
};

export default AppFooter;

