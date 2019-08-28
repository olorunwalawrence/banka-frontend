import {
  SIGNED_SUCCESS,
  AUTH_ERROR,
  INIT_AUTH_REQUEST,
  END_AUTH_REQUEST,
} from './actionTypes';
import axios from '../../utils/http';
import decodeToken from './decodeToken';

export const signup = (body) => async dispatch => {
  try {
    dispatch({ type: INIT_AUTH_REQUEST });
    const response = await axios.post('/auth/signup', body);
    const { data } = response.data;
    localStorage.setItem('token', data.token);
    const userData = await decodeToken(data.token);
    dispatch({ type: END_AUTH_REQUEST });
    dispatch({ type: SIGNED_SUCCESS, payload: userData });
  } catch (error) {
    let err =
      (typeof error.response !== 'undefined'
        ? error.response.data.error.replace(/[""]/g, '').split(':', 1)
        : error.message);
    if (err[0] === `password with value ${body.password} fails to match the required pattern`) {
      err = 'password should alphanumeric, no special characters e.g Example123';
    }
    dispatch({ type: END_AUTH_REQUEST });
    dispatch({ type: AUTH_ERROR, payload: err });
  }
}

export const login = (body) => async dispatch => {
  try {
    dispatch({ type: INIT_AUTH_REQUEST });
    const response = await axios.post('/auth/signin', body);
    const { data } = response.data;
    localStorage.setItem('token', data.token);
    const userData = await decodeToken(data.token);
    dispatch({ type: END_AUTH_REQUEST });
    dispatch({ type: SIGNED_SUCCESS, payload: userData });
  } catch (error) {
    const err =
      (typeof error.response !== 'undefined' ?
        error.response.data.error.replace(/[""]/g, '').split(':', 1) :
        error.message);
    dispatch({ type: END_AUTH_REQUEST });
    dispatch({ type: AUTH_ERROR, payload: err });
  }
}
