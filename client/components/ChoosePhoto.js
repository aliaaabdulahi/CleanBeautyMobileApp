import React, { Component } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { setImage } from "../store/googleVision";
import { connect } from "react-redux";

class ChoosePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.takePhoto = this.takePhoto.bind(this);
    this.uploadPhoto = this.handleImage.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  async takePhoto() {
    let image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    this.handleImage(image);
  }

  handleImage(image) {
    try {
      if (!image.cancelled) {
        this.props.setImage(image);
      }
    } catch (err) {
      console.log(err);
      alert("Could not upload. Try again");
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Button
          title="Take Photo of Product"
          onPress={() => this.takePhoto()}
        />
      </SafeAreaView>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    setImage: (image) => dispatch(setImage(image)),
  };
};
export default connect(null, mapDispatch)(ChoosePhoto);
