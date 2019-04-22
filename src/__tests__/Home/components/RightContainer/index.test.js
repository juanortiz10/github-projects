import React from 'react';
import { shallow } from 'enzyme';

import { RightContainer } from '../../../../pages/Home/components/RightContainer';
import { UserRepo } from '../../../../pages/Home/components/UserRepos';

describe('Home - RightContainer', () => {
  let wrapper;
  const props = {
    repos: null
  };

  beforeAll(() => {
    wrapper = shallow(<RightContainer {...props} />);
  });

  it('Renders correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should have props', () => {
    expect(wrapper.instance().props.repos).toBeNull();
  });
});
