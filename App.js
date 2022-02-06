import React from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

export default function App() {
  const [ready] = useAssets([require("./my_face.jpg")]);
  const [loaded] = Font.useFonts(Ionicons.font);

  if (!ready || !loaded) {
    return <AppLoading />;
  }
  // !3rd
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
