// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";

//Screen Import
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import AppLogo from "./components/AppLogo";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import {createDrawerNavigator} from '@react-navigation/drawer'


const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerTintColor: "white",
        // headerStyle: {
        // backgroundColor: "lightpink"
        // },
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{title:"หน้าหลัก"}}
      />

      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerStyle: {
            backgroundColor: "lightpink",
          },
          headerTitleAlign: "center",
          headerTintColor: "white",
          title: "เกี่ยวกับเรา",
        }}
      />

      <HomeStack.Screen
        name="AppLogo"
        component={AppLogo}
        // options={{title:"หน้าหลัก"}}
      />

      {/* <HomeStack.Screen 
    name="CreatePost" 
    component={CreatePostScreen} 
    options={{title:"สร้างโพสท์"}}/> */}

    </HomeStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    <HeaderButtonsProvider stackType="native">
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="HomeStack" component={HomeStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </HeaderButtonsProvider>
  );
};

export default App;
