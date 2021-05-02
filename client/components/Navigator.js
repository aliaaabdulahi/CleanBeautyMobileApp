import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import ChoosePhoto from "./ChoosePhoto";
import Search from "./Search";
import Home from "./Home";
import ProductConfirm from "./ProductConfirm";

const CameraStack = createStackNavigator();

function CameraStackScreen() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen name="Upload" component={ChoosePhoto} />
      <CameraStack.Screen name="ProductConfirm" component={ProductConfirm} />
    </CameraStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Upload" component={CameraStackScreen} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
