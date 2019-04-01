import { START_GET_PROFILE_DATA, START_GET_PROFILE_REPOS } from '../../consts/actionTypes';

export const getProfileData = payload => ({
  type: START_GET_PROFILE_DATA,
  payload
});

export const getProfileRepos = payload => ({
  type: START_GET_PROFILE_REPOS,
  payload
});
