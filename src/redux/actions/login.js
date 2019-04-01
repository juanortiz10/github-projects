import { START_GET_OAUTH_TOKEN } from '../../consts/actionTypes';

export const getGithubToken = payload => ({
  type: START_GET_OAUTH_TOKEN,
  payload
});
