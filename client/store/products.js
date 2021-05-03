import axios from "axios";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCTS_BY_NAME = "SET_PRODUCTS_BY_NAME";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const setProductsByName = (productsByName) => {
  return {
    type: SET_PRODUCTS_BY_NAME,
    productsByName,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://192.168.1.161:8080/api/products`
      );
      dispatch(setProducts(data));
    } catch (err) {
      console.log(err);
    }
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

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case SET_PRODUCTS_BY_NAME:
      return action.productsByName;
    default:
      return state;
  }
}
