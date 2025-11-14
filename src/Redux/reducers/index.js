import {
  SET_CONNECTION_STATUS,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constats/actionType';

import Immutable from 'seamless-immutable';

import {createReducer} from '../util/reduxUtil';

export const initialState = Immutable.from({
  isConnected: false,
  loading: false,
  app: {
    loading: false,
    loginData: null,
  },
});

export const onSetConnectionStatus = (state, status) => {
  return state.setIn(['isConnected'], status.status);
};

//////////////////////////////Login Reducer/////////////////////////////////////////////////////
export const onLoginStarted = state =>
  state.merge({
    app: state.app.merge({
      loginData: initialState.app.loginData,
      loading: true,
    }),
  });
export const onLoginSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      loginData: response,
      loading: false,
    }),
  });
export const onLoginFailure = state =>
  state.merge({
    app: state.app.merge({
      loginData: initialState.app.loginData,
      loading: false,
    }),
  });

const appReducer = createReducer(initialState, {
  [SET_CONNECTION_STATUS]: onSetConnectionStatus,

  [LOGIN_STARTED]: onLoginStarted,
  [LOGIN_SUCCESS]: onLoginSuccess,
  [LOGIN_FAILURE]: onLoginFailure,
});
export default appReducer;
