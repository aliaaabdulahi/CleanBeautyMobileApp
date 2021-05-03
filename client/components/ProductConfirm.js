import React, { Component } from "react";
import { View, Text } from "react-native";
import { gotGoogleResponse } from "../store/googleVision";
import { API_KEY } from "../../googleVisionConfig";
import { connect } from "react-redux";
import { queryString } from "../../utils";
import { fetchProductsByName } from "../store/products";

class ProductConfirm extends Component {
  constructor(props) {
    super(props);
    this.submitToGoogle = this.submitToGoogle.bind(this);
  }

  async componentDidMount() {
    await this.submitToGoogle();
    const { googleResponse, fetchProduct } = this.props;
    const query = queryString(googleResponse);
    await fetchProduct(query);
  }

  async submitToGoogle() {
    const { image, gotGoogleResponse } = this.props;
    const body = JSON.stringify({
      requests: [
        {
          features: [
            {
              type: "TEXT_DETECTION",
            },
          ],
          image: {
            content: image,
          },
        },
      ],
    });

    const data = await fetch(
      "https://vision.googleapis.com/v1/images:annotate?key=" + API_KEY,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: body,
      }
    );

    const responseJson = await data.json();
    gotGoogleResponse(responseJson);
  }
  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    image: state.googleVision.image,
    googleResponse: state.googleVision.response,
  };
};

const mapDispatch = (dispatch) => {
  return {
    gotGoogleResponse: (response) => dispatch(gotGoogleResponse(response)),
    fetchProduct: (googleResponse) =>
      dispatch(fetchProductsByName(googleResponse)),
  };
};

export default connect(mapState, mapDispatch)(ProductConfirm);
