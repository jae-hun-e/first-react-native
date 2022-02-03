import React, { useState } from "react";
import AppLoading from "expo-app-loading";

export default function App() {
  const [ready, setReady] = useState(false);
  // ! 1st
  const startAsync = () => async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  };
  // ! 2nd
  const onFinish = () => setReady(true);

  if (!ready) {
    return (
      <AppLoading
        startAsync={startAsync}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  // !3rd
  return null;
}
