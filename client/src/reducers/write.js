import {
  POST_SUCCESS,
  POST_FAILURE,
  POST_IMAGE_SUCCESS,
  POST_IMAGE_FAILURE,
  POST_READ,
  POST_READ_FAILURE,
  GET_ALL_POSTS,
  CLEAR_POST,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../actions/types';

const initialState = {
  loading: true,
  image: '',
  post: null,
  posts: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_IMAGE_SUCCESS:
      return {
        ...state,
        image: payload,
      };

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
        image: '',
        loading: false,
      };

    case POST_FAILURE:
    case POST_READ_FAILURE:
    case POST_IMAGE_FAILURE:
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
        post:
          state.post._id === payload.id
            ? { ...state.post, likes: payload.likes }
            : state.post,
        loading: false,
      };

    case ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: payload,
        },
        loading: false,
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}
