import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted, HomeScreen, Search, Reports } from "./app/screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const GiggleBottomTabs = () => {
  return (
    <Tab.Navigator  screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="HomeScreen" component={GiggleBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
