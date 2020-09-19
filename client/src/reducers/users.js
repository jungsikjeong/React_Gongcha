import { AVATAR_CHANGE } from '../actions/types';

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

    default:
      return state;
  }
}
