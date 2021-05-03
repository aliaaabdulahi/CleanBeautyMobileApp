import React from "react";
import { View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

import Product from "./Product";
import Search from "./Search";

export default function Routes() {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/products/search" component={Search} />
          <Route exact path="/products/:id" component={Product} />
        </Switch>
      </View>
    </NativeRouter>
  );
}
