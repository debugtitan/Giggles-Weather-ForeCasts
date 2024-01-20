import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted, HomeScreen, Search, Reports } from "./app/screens";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
} from "react-native-heroicons/outline";
import { StyleSheet, Text, View, Image } from "react-native";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const GiggleBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={(route) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center top-1">
              <HomeIcon size="22" color={focused ? "#e2f451" : "#748c94"} />

              <Text
                style={{
                  color: focused ? "#e2f451" : "#748c94",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center top-1">
              <MagnifyingGlassIcon size="22" color={focused ? "#e2f451" : "#748c94"} />

              <Text
                style={{
                  color: focused ? "#e2f451" : "#748c94",
                  fontSize: 12,
                }}
              >
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center top-1">
              <ChartBarIcon size="22" color={focused ? "#e2f451" : "#748c94"} />

              <Text
                style={{
                  color: focused ? "#e2f451" : "#748c94",
                  fontSize: 12,
                }}
              >
                Forecast
              </Text>
            </View>
          ),
        }}
      />
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
