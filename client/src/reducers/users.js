import {
  AVATAR_CHANGE,
  CLEAR_USER_PROFILE,
  PROFILE_CHANGE_SUCCESS,
} from '../actions/types';

const initialState = {
  userAvatarUrl: '',
  profile: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AVATAR_CHANGE:
      return {
        ...state,
        userAvatarUrl: payload,
      };

    case PROFILE_CHANGE_SUCCESS:
      return {
        ...state,
        profile: payload,
      };

    case CLEAR_USER_PROFILE:
      return {
        ...state,
        userAvatarUrl: '',
        newUser: '',
      };

    default:
      return state;
  }
}
