import { POST_SUCCESS, POST_FAILURE } from '../actions/types';

const initialState = {
  loading: true,
  post: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_SUCCESS:
      return {
        ...state,
        post: payload,
        loading: false,
      };

    case POST_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
