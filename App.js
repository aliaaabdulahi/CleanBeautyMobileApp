import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "./client/store";
import TabNavigator from "./client/components/TabNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
