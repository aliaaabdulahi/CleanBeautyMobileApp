import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import ChoosePhoto from "./ChoosePhoto";
import Search from "./Search";

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>
        <Button
          title="Scan a Product"
          onPress={() => navigation.navigate("Upload")}
        />
        <Button
          title="Search for a Product"
          onPress={() => navigation.navigate("Search")}
        />
      </Text>
    </SafeAreaView>
  );
}

export default Home;
