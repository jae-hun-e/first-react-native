import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity } from "react-native";

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        presentation: "modal",
        animation: "slide_from_right",
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
};

export default Stack;

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>one</Text>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text>Two</Text>
  </TouchableOpacity>
);
const ScreenThree = ({ navigation: { goBack, setOptions } }) => (
  <>
    <TouchableOpacity onPress={() => goBack()}>
      <Text>go back</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setOptions({ title: "Hello!" })}>
      <Text>change title</Text>
    </TouchableOpacity>
  </>
);
