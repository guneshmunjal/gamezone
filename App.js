import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import reviewDetails from "./screens/reviewDetails";
import About from "./screens/about";
import * as Font from "expo-font";
import { useState } from "react";
import { AppLoading } from "expo";
// import Navigator from "./AppStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  // const [fontsLoaded, setfontsLoaded] = useState(false);

  // if (fontsLoaded) {
  //   return <Navigator />;
  // } else {
  //   <AppLoading startAsync={getFonts} onFinish={() => setfontsLoaded(true)} />;
  // }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ReviewDetails" component={reviewDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
