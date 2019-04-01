import { START_GET_OAUTH_TOKEN, SUCCESS_GET_OAUTH_TOKEN, ERROR_GET_OATUH_TOKEN } from '../../consts/actionTypes';
import get from 'lodash/get';

import { GITHUB_TOKEN } from '../../consts';
import { saveData } from '../../utils/storage';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_GET_OAUTH_TOKEN:
      return { ...state };
    case SUCCESS_GET_OAUTH_TOKEN:
      const githubToken = get(action, 'loginResponse.data.githubToken');
      saveData(GITHUB_TOKEN, githubToken);
      return { ...state, githubToken };
    case ERROR_GET_OATUH_TOKEN:
      return { ...state };
      break;

    default:
      return state;
  }
}
