import {
  POST_SUCCESS,
  POST_FAILURE,
  POST_READ,
  POST_READ_FAILURE,
  GET_ALL_POSTS,
  CLEAR_POST,
} from '../actions/types';

const initialState = {
  loading: true,
  post: null,
  posts: [],
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

    case CLEAR_POST:
      return {
        ...state,
        post: null,
        posts: [],
        loading: false,
      };

    case POST_FAILURE:
    case POST_READ_FAILURE:
      return {
        ...state,
        loading: false,
      };

    case GET_ALL_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };

    default:
      return state;
  }
}
