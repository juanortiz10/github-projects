import {
  START_GET_PROFILE_DATA,
  SUCCESS_GET_PROFILE_DATA,
  ERROR_GET_PROFILE_DATA,
  START_GET_PROFILE_REPOS,
  SUCCESS_GET_PROFILE_REPOS,
  ERROR_GET_PROFILE_REPOS
} from '../../consts/actionTypes';
import get from 'lodash/get';

const initialState = {};

//TODO there's more to do here
export default function(state = initialState, action) {
  switch (action.type) {
    case START_GET_PROFILE_DATA:
      return { ...state };
    case SUCCESS_GET_PROFILE_DATA:
      const githubData = get(action, 'githubData.data', {});
      return { ...state, githubData };
    case ERROR_GET_PROFILE_DATA:
      return { ...state };
      break;
    case START_GET_PROFILE_REPOS:
      return { ...state };
      break;
    case SUCCESS_GET_PROFILE_REPOS:
      const userRepos = get(action, 'userRepos.data', null);
      return { ...state, userRepos };
      break;
    case ERROR_GET_PROFILE_REPOS:
      return { ...state };
      break;
    default:
      return state;
  }
}
