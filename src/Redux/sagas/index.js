import {put, takeLatest, all} from 'redux-saga/effects';
import {LOGIN_REQUEST} from '../constats/actionType';
import {loginStarted, loginSuccess, loginFailure} from '../actions';
import BaseModel from '../../Models/BaseModel';
import {showMessage} from '../../Utility/Utility';

/////////////////////////////////////////////////////
function isValidResponseWithoutAlert(responseObj) {
  if (responseObj && responseObj.data) {
    if (!responseObj.data.error) {
      return true;
    } else {
      return false;
    }
  } else {
    setTimeout(() => {
      showMessage(true, 'Internal Server Error');
    }, 100);
    return false;
  }
}

////////////////////Change for post API/////////////////////////////////
function isValidPostResponseWithoutAlert(responseObj) {
  if (responseObj && responseObj.data) {
    if (responseObj.data) {
      return true;
    } else {
      return false;
    }
  } else {
    setTimeout(() => {
      showMessage(true, 'Internal Server Error');
    }, 100);
    return false;
  }
}

// Saga method for LOGIN request///////////////////////////////
export function* onLoginRequest(action) {
  try {
    yield put(loginStarted());
    const responseObj = yield BaseModel.login(action.requestBody);
    if (isValidPostResponseWithoutAlert(responseObj, false)) {
      yield put(loginSuccess(responseObj));
    } else {
      yield put(loginFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(loginFailure());
  }
}

export function* actionWatcher() {
  yield takeLatest(LOGIN_REQUEST, onLoginRequest);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
