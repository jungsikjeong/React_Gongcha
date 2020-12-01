import axios from 'axios';
import { loadUser } from './auth';
import {
  AVATAR_CHANGE,
  CLEAR_USER_PROFILE,
  PROFILE_CHANGE_SUCCESS,
  USER_PROFILE,
} from './types';

// 유저 프로필 이미지변경,multer때문에 필요
export const avatarChange = (formData) => async (dispatch) => {
  try {
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    const res = await axios.post('/api/users/edit/avatar', formData, config);

    dispatch({
      type: AVATAR_CHANGE,
      payload: res.data.filePath,
    });
  } catch (err) {
    console.error(err);
  }
};

// 유저 프로필 변경(유저 프로필 이미지변경 및 닉네임변경)
export const profileChange = (body) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/edit/profile', body);

    dispatch({
      type: PROFILE_CHANGE_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
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

// 유저 프로필 보기
export const userProfile = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/profile/${userId}`);

    dispatch({
      type: USER_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
