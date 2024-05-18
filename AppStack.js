import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ReviewDetails" component={ReviewDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
