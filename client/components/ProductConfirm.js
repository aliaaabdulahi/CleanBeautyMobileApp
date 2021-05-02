import React, { Component } from "react";
import { View, Text } from "react-native";
import { gotGoogleResponse } from "../store/googleVision";
import { API_KEY } from "../../googleVisionConfig";
import { connect } from "react-redux";

class ProductConfirm extends Component {
  constructor(props) {
    super(props);
    this.submitToGoogle = this.submitToGoogle.bind(this);
  }

  async componentDidMount() {
    await this.submitToGoogle();
  }

  async submitToGoogle() {
    console.log("imagebeforebod", this.props.image);
    const { image, gotGoogleResponse } = this.props;
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: "TEXT_DETECTION",
              maxResults: 1,
            },
          ],
        },
      ],
    };
    console.log("image after bod", image);
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
    console.log("rsponseJson", responseJson);
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
      dispatch(fetchProductByName(googleResponse)),
  };
};

export default connect(mapState, mapDispatch)(ProductConfirm);
