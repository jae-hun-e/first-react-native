import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text, useColorScheme } from "react-native";
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR } from "../color";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./Stack";
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      initialRouteName="돼지"
      screenOptions={{
        headerTitleAlign: "center",
        // headerShown: false,
        tabBarLabelPosition: "beside-icon",
        headerRight: () => (
          <View>
            <Text>Home</Text>
          </View>
        ),
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : BLACK_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: 3,
          fontSize: 13,
          fontWeight: "800",
        },
      }}
    >
      <Tab.Screen
        name="재훈이는"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            console.log("movie :", focused, color, size);
            return <Ionicons name="ios-film" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="킹왕짱"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            console.log("tv :", focused, color, size);
            return <Ionicons name="ios-tv" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="믓쟁이"
        component={Search}
        options={{
          tabBarBadge: 5,
          tabBarIcon: ({ focused, color, size }) => {
            console.log("search :", focused, color, size);
            return (
              <Ionicons
                name={focused ? "ios-search-circle-outline" : "ios-search"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
