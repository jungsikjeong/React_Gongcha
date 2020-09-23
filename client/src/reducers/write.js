import {
  POST_SUCCESS,
  POST_FAILURE,
  POST_READ,
  POST_READ_FAILURE,
  GET_ALL_POSTS,
  CLEAR_POST,
  UPDATE_LIKES,
} from '../actions/types';

const initialState = {
  loading: true,
  post: null,
  posts: [],
  error: {},
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
        error: payload,
        loading: false,
      };

    case GET_ALL_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };

    default:
      return state;
  }
}
