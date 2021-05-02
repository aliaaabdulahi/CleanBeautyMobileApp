import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
    };
  }

  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const products = this.props.products || [];
    console.log(products);
    return (
      <SafeAreaView>
        <ScrollView>
          {products.length
            ? products.map((product) => (
                <Text key={product.id}>{product.brandName}</Text>
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
