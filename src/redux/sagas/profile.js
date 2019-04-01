import { put, call, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../api';
import {
  START_GET_PROFILE_DATA,
  SUCCESS_GET_PROFILE_DATA,
  ERROR_GET_PROFILE_DATA,
  START_GET_PROFILE_REPOS,
  SUCCESS_GET_PROFILE_REPOS,
  ERROR_GET_PROFILE_REPOS
} from '../../consts/actionTypes';

export function* getProfileData({ payload: { githubToken } }) {
  try {
    const githubData = yield call(apiCall, `https://api.github.com/user?access_token=${githubToken}`, null, null, 'get');
    yield put({ type: SUCCESS_GET_PROFILE_DATA, githubData });
  } catch (error) {
    yield put({ type: ERROR_GET_PROFILE_DATA, error });
  }
}

export function* getProfileRepos({ payload: { githubToken, reposUrl } }) {
  try {
    const userRepos = yield call(apiCall, reposUrl, null, null, 'get');
    yield put({ type: SUCCESS_GET_PROFILE_REPOS, userRepos });
  } catch (error) {
    yield put({ type: ERROR_GET_PROFILE_REPOS, error });
  }
}

export default function* profileWatcher() {
  yield takeLatest(START_GET_PROFILE_DATA, getProfileData);
  yield takeLatest(START_GET_PROFILE_REPOS, getProfileRepos);
}
