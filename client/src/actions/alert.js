import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

/**
 * 액션 발생 함수
 */
export const setAlert = (msg, alertType, timeout = 1500) => (dispatch) => {
  const id = uuidv4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  // 1.5초후 REMOVE_ALERT 리듀서 발생
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
