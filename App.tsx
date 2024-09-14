// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

//react import
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//Screen Import
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import AppLogo from "./components/AppLogo";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";

//navigation import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
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

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen
        name="Products"
        component={ProductScreen}
      />

    </ProductStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};

export default App;
