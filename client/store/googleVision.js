export const SET_IMAGE = "SET_IMAGE";

export const setImage = (image) => {
  return {
    type: SET_IMAGE,
    image,
  };
};

const initialState = {
  image: null,
  response: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return { ...state, image: action.image };
    default:
      return state;
  }
};
