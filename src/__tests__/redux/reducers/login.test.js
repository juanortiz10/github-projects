import React from 'react';

import loginReducer from '../../../redux/reducers/login';
import { START_GET_OAUTH_TOKEN, SUCCESS_GET_OAUTH_TOKEN, ERROR_GET_OATUH_TOKEN } from '../../../consts/actionTypes';

describe('Login reducer', () => {
  const initialState = {};
  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };

  global.localStorage = localStorageMock;

  it('Should return the initialState', () => {
    expect(loginReducer(undefined, {})).toEqual({});
  });

  it('Should return githubToken', () => {
    const action = {
      type: SUCCESS_GET_OAUTH_TOKEN,
      loginResponse: { data: { githubToken: '12345678' } }
    };

    expect(loginReducer([], action)).toEqual(action.loginResponse.data);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
