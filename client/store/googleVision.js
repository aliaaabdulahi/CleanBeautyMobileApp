export const SET_IMAGE = "SET_IMAGE";
export const GOT_GOOGLE_RESPONSE = "GOT_GOOGLE_RESPONSE";

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
const initialState = {
  response: null,
  image: null,
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
    default:
      return state;
  }
};
