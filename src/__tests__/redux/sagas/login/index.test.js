import React from 'react';
import { runSaga } from 'redux-saga';
import sinon from 'sinon';

import * as api from '../../../../redux/api';
import { getGithubToken as getGithubTokenSaga } from '../../../../redux/sagas/login';
import { START_GET_OAUTH_TOKEN, SUCCESS_GET_OAUTH_TOKEN } from '../../../../consts/actionTypes';

const recordSaga = async (saga, initialAction) => {
  const dispatched = [];
  //TODO

  await runSaga(
    {
      dispatch: action => dispatched.push(action) //TODO
    },
    saga,
    initialAction
  ).done; //TODO

  return dispatched;
};

describe('Login saga', () => {
  it('Should return a valid github token', async () => {
    const fakeResponse = { githubToken: 'G1THU8T0K3N' };
    const initialAction = { type: START_GET_OAUTH_TOKEN, payload: { code: '12345' } };
    const url = 'https://fakeurl.com';

    /* Mock APIS */
    sinon.stub(api, 'apiCall').callsFake(() => fakeResponse);

    /* Run sagas out there */
    const dispatched = await recordSaga(getGithubTokenSaga, initialAction);

    expect(dispatched[0]).toBeDefined();
    expect(dispatched).toHaveLength(1);
    expect(dispatched[0].type).toEqual(SUCCESS_GET_OAUTH_TOKEN);
    expect(dispatched[0].loginResponse.githubToken).toEqual(fakeResponse.githubToken);
  });
});
