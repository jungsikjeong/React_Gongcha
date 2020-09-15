import {
  POST_SUCCESS,
  POST_FAILURE,
  POST_READ,
  POST_READ_FAILURE,
} from '../actions/types';

const initialState = {
  loading: true,
  post: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_SUCCESS:
    case POST_READ:
      return {
        ...state,
        post: payload,
        loading: false,
      };

    case POST_FAILURE:
    case POST_READ_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
