/* eslint-disable prettier/prettier */
import {
  SET_CONNECTION_STATUS,
  LOGIN_STARTED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constats/actionType';
import {createAction} from '../util/reduxUtil';

export const setConnectionStatusRequest = status =>
  createAction(SET_CONNECTION_STATUS, {status});

// login action method

export const loginRequest = requestBody =>
  createAction(LOGIN_REQUEST, {requestBody});
export const loginStarted = () => createAction(LOGIN_STARTED);
export const loginSuccess = response => createAction(LOGIN_SUCCESS, {response});
export const loginFailure = () => createAction(LOGIN_FAILURE);
