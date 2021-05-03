import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>{product["currentSku/imageAltText"]}</Text>
        <Text>{product["currentSku/altImage"]} </Text>
        <Image source={{ uri: `https://sephora.com${product.heroImage}` }} />
      </View>
    );
  }
}

export default Product;
