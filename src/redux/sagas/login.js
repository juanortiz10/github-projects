import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';
import { START_GET_OAUTH_TOKEN, SUCCESS_GET_OAUTH_TOKEN, ERROR_GET_OATUH_TOKEN } from '../../consts/actionTypes';

export function* getGithubToken({ payload }) {
  try {
    const body = {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      code: payload.code
    };

    const loginResponse = yield call(apiCall, 'https://reactjsteachingproj.herokuapp.com/users/github', body, null, 'post');

    yield put({ type: SUCCESS_GET_OAUTH_TOKEN, loginResponse });
  } catch (error) {
    yield put({ type: ERROR_GET_OATUH_TOKEN, error });
  }
}

export default function* login() {
  yield takeLatest(START_GET_OAUTH_TOKEN, getGithubToken);
}
