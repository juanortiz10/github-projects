import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Home } from '../../pages/Home';
import { GITHUB_TOKEN } from '../../consts';

describe('<Home/>', () => {
  let wrapper;
  let props = {
    getProfileData: jest.fn(),
    githubUserRepos: [],
    getProfileRepos: jest.fn(),
    classes: {}
  };

  const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };

  global.localStorage = localStorageMock;
  window.location.reload = jest.fn();

  beforeAll(() => {
    wrapper = mount(<Home {...props} />);
  });

  it('Render props okay', () => {
    expect(wrapper.props()).toBeDefined();
    expect(wrapper.props().getProfileData).toBeDefined();
    expect(wrapper.props().githubUserRepos).toBeDefined();
    expect(wrapper.props().classes).toBeDefined();
  });

  it('Calls getProfileData after componentDidMount and calls localStorage', () => {
    expect(wrapper.state().githubToken).toBeUndefined();

    sinon.spy(Home.prototype, 'componentDidMount');

    expect(localStorage.getItem).toBeCalledWith(GITHUB_TOKEN);
    expect(wrapper.props().getProfileData).toHaveBeenCalledTimes(1);
  });

  it('Calls getProfileRepos props after changing props', () => {
    const githubData = { githubData: { repos_url: 'github.com' } };
    wrapper.setProps(githubData);
    expect(wrapper.props().githubData).toEqual({ repos_url: 'github.com' });
    expect(wrapper.props().getProfileRepos).toHaveBeenCalled();
  });

  it('Remove item from localStorage after calling logout', () => {
    wrapper.instance().handleLogout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
