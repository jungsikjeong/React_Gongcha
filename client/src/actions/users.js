import axios from 'axios';
import { AVATAR_CHANGE, CLEAR_USER_PROFILE } from './types';
import { setAlert } from './alert';

// 유저 프로필 이미지변경
export const avatarChange = (formData) => async (dispatch) => {
  try {
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    const res = await axios.post('/api/users/edit/avatar', formData, config);

    console.log(res.data);
    dispatch({
      type: AVATAR_CHANGE,
      payload: res.data.filePath,
    });
  } catch (err) {
    console.error(err);
  }
};

// 유저 프로필 변경
export const profileChange = (newPhotoURL) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/edit/profile', newPhotoURL);

    dispatch(setAlert('프로필 변경 완료', 'success'));
  } catch (err) {
    console.error(err);
  }
};

// 페이지를 벗어날때 유저정보 초기화
export const clearUserProfile = () => async (dispatch) => {
  dispatch({
    type: CLEAR_USER_PROFILE,
  });
};
