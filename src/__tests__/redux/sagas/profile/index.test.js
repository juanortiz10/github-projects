import React from 'react';
import sinon from 'sinon';

import * as api from '../../../../redux/api';
import { getProfileData as getProfileDataSaga, getProfileRepos as getProfileReposSaga } from '../../../../redux/sagas/profile';
import { recordSaga } from '../../../../redux/utils';
import {
  START_GET_PROFILE_DATA,
  START_GET_PROFILE_REPOS,
  SUCCESS_GET_PROFILE_DATA,
  SUCCESS_GET_PROFILE_REPOS
} from '../../../../consts/actionTypes';

describe('Profile saga', () => {
  const url = 'https://fakeurl.com';
  const fakeResponse = {
    repositories: [{ id: 1, data: {} }, { id: 2, data: {} }],
    profileData: { githubUser: 1, userName: 'githubUserName' }
  };

  beforeAll(() => {
    sinon.stub(api, 'apiCall').callsFake(() => fakeResponse);
  });

  it('Should return github data when called getProfileDataSaga', async () => {
    const initialAction = { type: START_GET_PROFILE_DATA, payload: { githubToken: 'MYGITHUBTOKEN_10' } };
    const dispatched = await recordSaga(getProfileDataSaga, initialAction);

    expect(dispatched[0].type).toEqual(SUCCESS_GET_PROFILE_DATA);
    expect(dispatched[0].githubData.profileData).toBeDefined();
    expect(dispatched[0].githubData.profileData).toEqual(fakeResponse.profileData);
  });

  it('Should return valid repositories when called getProfileReposSaga', async () => {
    const initialAction = { type: START_GET_PROFILE_REPOS, payload: { githubToken: 'MYGITHUBTOKEN_10', reposUrl: url } };
    const dispatched = await recordSaga(getProfileReposSaga, initialAction);

    expect(dispatched[0].type).toEqual(SUCCESS_GET_PROFILE_REPOS);
    expect(dispatched[0].userRepos.repositories).toBeDefined();
    expect(dispatched[0].userRepos.repositories).toEqual(fakeResponse.repositories);
  });
});
