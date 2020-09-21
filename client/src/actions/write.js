import axios from 'axios';
import {
  POST_SUCCESS,
  POST_FAILURE,
  POST_READ,
  POST_READ_FAILURE,
  GET_ALL_POSTS,
  CLEAR_POST,
} from './types';
import { setAlert } from './alert';

export const writePost = ({ text, history }) => async (dispatch) => {
  try {
    const res = await axios.post('/api/posts', { text });

    dispatch({
      type: POST_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('게시글 작성 완료', 'success'));

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
  // dispatch({ type: CLEAR_POST });
  try {
    const res = await axios.get(`/api/posts/${postId}`);

    dispatch({
      type: POST_READ,
      payload: res.data,
    });

    // console.log(res.data);
  } catch (err) {
    console.error(err);

    dispatch({
      type: POST_READ_FAILURE,
      payload: err.message,
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
    console.error(err);
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
    console.error(err);
  }
};
