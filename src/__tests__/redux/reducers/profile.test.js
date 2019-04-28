import React from 'react';

import profileReducer from '../../../redux/reducers/profile';
import { SUCCESS_GET_PROFILE_DATA, SUCCESS_GET_PROFILE_REPOS } from '../../../consts/actionTypes';

describe('Profile reducer', () => {
  const initialState = {};

  it('Should return the initialState', () => {
    expect(profileReducer(undefined, {})).toEqual({});
  });

  it('Should return githubData', () => {
    const action = {
      type: SUCCESS_GET_PROFILE_DATA,
      data: { githubData: { data: {} } }
    };

    expect(profileReducer([], action)).toEqual({ githubData: {} });
    expect(profileReducer([], action)).toBeDefined();
  });

  it('Should return userRepos', () => {
    const action = {
      type: SUCCESS_GET_PROFILE_REPOS,
      data: { userRepos: { data: {} } }
    };

    expect(profileReducer([], action)).toEqual({ userRepos: {} });
    expect(profileReducer([], action)).toBeDefined();
  });
});
