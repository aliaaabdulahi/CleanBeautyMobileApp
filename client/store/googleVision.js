import axios from "axios";

export const SET_IMAGE = "SET_IMAGE";
export const GOT_GOOGLE_RESPONSE = "GOT_GOOGLE_RESPONSE";

export const SET_PRODUCTS_BY_NAME = "SET_PRODUCTS_BY_NAME";

export const setImage = (image) => {
  return {
    type: SET_IMAGE,
    image,
  };
};

export const gotGoogleResponse = (response) => {
  return {
    type: GOT_GOOGLE_RESPONSE,
    response,
  };
};

export const setProductsByName = (productsByName) => {
  return {
    type: SET_PRODUCTS_BY_NAME,
    productsByName,
  };
};

export const fetchProductsByName = (queryString) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://192.168.1.161:8080/api/products/${queryString}`
      );
      console.log(data);
      dispatch(setProductsByName(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  response: null,
  image: null,
  productsArray: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return { ...state, image: action.image.base64 };
    case GOT_GOOGLE_RESPONSE:
      return {
        ...state,
        response: action.response.responses[0].fullTextAnnotation.text,
      };
    case SET_PRODUCTS_BY_NAME:
      return { ...state, productsArray: action.productsByName };
    default:
      return state;
  }
};
