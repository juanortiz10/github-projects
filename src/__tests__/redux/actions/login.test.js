import React from 'react';

import { getGithubToken } from '../../../redux/actions/login';
import { START_GET_OAUTH_TOKEN } from '../../../consts/actionTypes';

describe('Login actions', () => {
  it('should create an action to start fetching oauth token', () => {
    const payload = { code: 'GITHU8C0D3' };
    const expectedAction = {
      type: START_GET_OAUTH_TOKEN,
      payload
    };

    expect(getGithubToken(payload)).toBeDefined();
    expect(getGithubToken(payload)).toEqual(expectedAction);
  });
});
