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
  REMOVE_COMMENT_STEP,
  UPDATE_COMMENT_LIKES,
  ADD_STEP_COMMENT,
  UPDATE_COMMENT_STEP_LIKES,
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

    case UPDATE_COMMENT_LIKES:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.map((comment) =>
            comment._id === payload.comment_id
              ? { ...comment, likes: payload.likes }
              : comment
          ),
        },
        loading: false,
      };

    case UPDATE_COMMENT_STEP_LIKES:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.map((comment) =>
            comment.commentsStep.map((commentStep) =>
              commentStep._id === payload.commentStep_id
                ? { ...commentStep, likes: payload.likes }
                : commentStep
            )
          ),
        },
        loading: false,
      };

    // -- 2
    // case UPDATE_COMMENT_STEP_LIKES:
    //   return {
    //     ...state,
    //     post: {
    //       ...state.post,
    //       comments: state.post.comments.commentsStep.map((commentStep) =>
    //         commentStep._id === payload.commentStep_id
    //           ? { ...commentStep, likes: payload.likes }
    //           : commentStep
    //       ),
    //     },
    //     loading: false,
    //   };

    // -- 1
    // case UPDATE_COMMENT_STEP_LIKES:
    //   return {
    //     ...state,
    //     post: {
    //       ...state.post,
    //       comments: state.post.comments.map((comment) =>
    //         comment.commentsStep.map((commentStep) =>
    //           commentStep._id === payload.commentStep_id
    //             ? { ...commentStep, likes: payload.likes }
    //             : commentStep
    //         )
    //       ),
    //     },
    //     loading: false,
    //   };

    case ADD_COMMENT:
    case ADD_STEP_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
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

    case REMOVE_COMMENT_STEP:
      return {
        ...state,
        post: {
          ...state.post,
          comments: payload,
        },
      };
    default:
      return state;
  }
}
