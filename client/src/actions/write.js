import axios from 'axios';
import { WRITE_PAGE_ON, WRITE_PAGE_CLOSE } from './types';

export const writePageOn = (visible = true) => async (dispatch) => {
  dispatch({
    type: WRITE_PAGE_ON,
    payload: visible,
  });
};
export const writePageClose = (visible = false) => async (dispatch) => {
  dispatch({
    type: WRITE_PAGE_CLOSE,
    payload: visible,
  });
};
