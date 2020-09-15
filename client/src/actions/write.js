import axios from 'axios';
import { POST_SUCCESS, POST_FAILURE } from './types';
import { setAlert } from './alert';

export const writePost = ({ text }) => async (dispatch) => {
  try {
    const res = await axios.post('/api/posts', { text });

    dispatch({
      type: POST_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('게시글 작성 완료', 'success'));

    // 이후 게시글 작성된 URL로 이동시켜주는 로직 작성??
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
