import { WRITE_PAGE_ON, WRITE_PAGE_CLOSE } from '../actions/types';

const initialState = {
  visible: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WRITE_PAGE_ON:
      return {
        ...state,
        visible: payload,
      };

    case WRITE_PAGE_CLOSE:
      return {
        ...state,
        visible: payload,
      };

    default:
      return state;
  }
}
