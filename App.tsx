import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <HomeStack.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        headerTintColor: "white", 
        headerStyle: {
        backgroundColor: "lightpink"
        },
        headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:"หน้าหลัก"}}
        />
        <HomeStack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{title:"เกี่ยวกับเรา"}}
        />
        <HomeStack.Screen 
        name="CreatePost" 
        component={CreatePostScreen} 
        options={{title:"สร้างโพสท์"}}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
