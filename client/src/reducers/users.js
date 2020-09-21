import { AVATAR_CHANGE, CLEAR_USER_PROFILE } from '../actions/types';

const initialState = {
  userAvatarUrl: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AVATAR_CHANGE:
      return {
        ...state,
        userAvatarUrl: payload,
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
