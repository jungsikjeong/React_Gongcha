import axios from 'axios';
import { AVATAR_CHANGE } from './types';
import { setAlert } from './alert';

export const avatarChange = (formData) => async (dispatch) => {
  try {
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };

    const res = await axios.post('/api/users/edit/avatar', formData, config);

    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
