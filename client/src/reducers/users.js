import {
  AVATAR_CHANGE,
  CLEAR_USER_PROFILE,
  PROFILE_CHANGE_SUCCESS,
  USER_PROFILE,
} from '../actions/types';

const initialState = {
  userAvatarUrl: '',
  profile: '',
  userProfileList: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_PROFILE:
      return {
        ...state,
        userProfileList: payload,
      };

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
