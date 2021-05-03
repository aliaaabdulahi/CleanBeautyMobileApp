import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import Product from "./Product";
import { fetchProducts } from "../store/products";
import { fetchSingleProduct } from "../store/product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  onChangeText() {
    console.log("hello");
  }

  handlePress() {
    const { navigation } = this.props;
    return navigation.navigate("Product");
  }

  render() {
    const products = this.props.products || [];
    console.log(products);
    return (
      <SafeAreaView>
        <ScrollView>
          <TextInput onChangeText={this.onChangeText} />
          {products.length
            ? products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  handlePress={this.handlePress}
                />
              ))
            : null}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(Products);
