import axios from 'axios';
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
  UPDATE_COMMENT_LIKES,
  ADD_STEP_COMMENT,
} from './types';
import { setAlert } from './alert';

// 게시글 이미지 업로드
export const writeImagePost = (image) => async (dispatch) => {
  try {
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    const res = await axios.post('/api/posts/upload', image, config);

    console.log(res.data);
    dispatch({
      type: POST_IMAGE_SUCCESS,
      payload: res.data.filePath,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: POST_IMAGE_FAILURE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const writePost = ({ body, history }) => async (dispatch) => {
  try {
    const { text, image } = body;
    const res = await axios.post('/api/posts', { text, image });

    dispatch({
      type: POST_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('게시글 작성 완료', 'success'));

    dispatch({ type: CLEAR_POST });

    // 게시글 작성후 방금 작성한 페이지로 이동
    const _id = res.data._id;
    history.push(`/postpage/${_id}`);
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err.response.data.errors);

    if (errors) {
      // 서버에서 오는 에러메시지가 array임
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: POST_FAILURE,
    });
  }
};

// id로 게시글 가져오기
export const readPost = (postId) => async (dispatch) => {
  dispatch({ type: CLEAR_POST });
  try {
    const res = await axios.get(`/api/posts/${postId}`);

    dispatch({
      type: POST_READ,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: POST_READ_FAILURE,
      payload: { msg: err },
    });
  }
};

// 모든 게시글 가져오기
export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_FAILURE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// 특정 게시글 지우기
export const removePost = (postId, history) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch({ type: CLEAR_POST });
    dispatch(setAlert('게시글 삭제 완료', 'success'));

    history.push('/postlist');
  } catch (err) {
    dispatch({
      type: POST_FAILURE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Post Like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: POST_FAILURE,
      payload: err.response,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove Post like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: POST_FAILURE,
      payload: err.response,
      // payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// ADD Comment
export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/posts/comment/${postId}`, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('댓글 작성 완료', 'success'));
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err.response);

    // if (errors) {
    //   // 서버에서 오는 에러메시지가 array임
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }
    dispatch({
      type: POST_FAILURE,
      payload: err,
    });
  }
};

// Remove Comment
export const removeComment = (postId, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert('댓글 삭제 완료', 'success'));
  } catch (err) {
    // const errors = err.response.data.errors;
    console.error(err);

    // if (errors) {
    //   // 서버에서 오는 에러메시지가 array임
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }
    dispatch({
      type: POST_FAILURE,
      payload: err,
    });
  }
};

// Add Comment Like
export const addCommentLike = (id, comment_id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/comment/like/${id}/${comment_id}`);

    dispatch({
      type: UPDATE_COMMENT_LIKES,
      payload: { comment_id, likes: res.data },
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: POST_FAILURE,
      // payload: err.response,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove Comment like
export const removeCommentLike = (id, comment_id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/api/posts/comment/unlike/${id}/${comment_id}`
    );

    dispatch({
      type: UPDATE_COMMENT_LIKES,
      payload: { comment_id, likes: res.data },
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: POST_FAILURE,
      // payload: err.response,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// ADD StepComment
export const addStepComment = (postId, comment_id, formData) => async (
  dispatch
) => {
  try {
    const res = await axios.post(
      `/api/posts/comment/step/${postId}/${comment_id}`,
      formData
    );

    dispatch({
      type: ADD_STEP_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('댓글 작성 완료', 'success'));
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err.response);

    // if (errors) {
    //   // 서버에서 오는 에러메시지가 array임
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }
    dispatch({
      type: POST_FAILURE,
      payload: err,
    });
  }
};
