import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../actions/actionsAsync';

//Watcher saga watches API_CALL_REQUEST actions
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

//Worker saga dispatches an action
export function* workerSaga(action) {
  try {
    const response = yield call(fetchHttp(action.payload.request));
    const token = response.data.token;
    yield put({
      type: action.payload.successAction,
      payload: {
        token: token,
      },
    });
  } catch (error) {
    yield put({
      type: action.payload.failureAction,
      payload: {
        error: error,
      },
    });
  }
}

const fetchHttp = (request) => {
  return function () {
    return axios(request);
  };
};
