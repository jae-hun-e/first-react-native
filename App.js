import React from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Stack from "./navigation/Stack";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";
import { darkTheme, ligthTheme } from "./theme/styled";

export default function App() {
  const [ready] = useAssets([require("./my_face.jpg")]);
  const [loaded] = Font.useFonts(Ionicons.font);

  const isDark = useColorScheme() === "dark";

  if (!ready || !loaded) {
    return <AppLoading />;
  }
  // !3rd
  return (
    <ThemeProvider theme={isDark ? darkTheme : ligthTheme}>
      <NavigationContainer>
        {/* <Stack /> */}
        {/* <Tabs /> */}
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
