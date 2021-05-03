import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product, handlePress } = this.props;
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text>{product["currentSku/imageAltText"]}</Text>
        <Text>{product["currentSku/altImage"]} </Text>
        <Image source={{ uri: `https://sephora.com${product.heroImage}` }} />
        <Text>Is natural? {product["currentSku/isNatural"]}</Text>
        <Text>Is organic? {product["currentSku/isOrganic"]}</Text>
      </TouchableOpacity>
    );
  }
}

export default Product;
