import React from 'react';
import jwtDecode from 'jwt-decode';
import { SIGNED_SUCCESS, LOG_OUT } from './actionTypes'; 

export const checkLoggedUser = () => async dispatch => {
  const token = localStorage.getItem('token');
  if(token) {
    const payload = jwtDecode(token);
    const { exp, data } = payload;
    const time = Date.now() / 1000;
    if (exp > time) {
      await dispatch({ type: SIGNED_SUCCESS, payload: data });
      return;
    }
  }
  
  await dispatch({ type: LOG_OUT, payload: { isloading: false, user: {}, error: ''}});
  return;
}

export const logout = () => async dispatch => {
  localStorage.clear();
  await dispatch ({ type: LOG_OUT });
}
