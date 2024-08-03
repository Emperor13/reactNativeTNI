import { StyleSheet, Text, View } from "react-native";
import React from "react";

//import style
import {stylesPractice} from "../styles/styles";

type AppFooterProps = {
    tni: string,
}
const AppFooter = ({tni}:AppFooterProps) => {

  return (
      <View style={stylesPractice.footer}>
        <Text style={stylesPractice.footerText}>
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

