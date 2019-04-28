import React from 'react';

import { getProfileData, getProfileRepos } from '../../../redux/actions/profile';
import { START_GET_PROFILE_DATA, START_GET_PROFILE_REPOS } from '../../../consts/actionTypes';

describe('Profile actions', () => {
  it('should create an action to start fetching profile data', () => {
    const payload = {};
    const expectedAction = {
      type: START_GET_PROFILE_DATA,
      payload
    };

    expect(getProfileData(payload)).toBeDefined();
    expect(getProfileData(payload)).toEqual(expectedAction);
  });

  it('should create an action to start fetching profile repositories', () => {
    const payload = {};
    const expectedAction = {
      type: START_GET_PROFILE_REPOS,
      payload
    };

    expect(getProfileRepos(payload)).toBeDefined();
    expect(getProfileRepos(payload)).toEqual(expectedAction);
  });
});
