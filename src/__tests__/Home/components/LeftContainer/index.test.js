import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import { LeftContainer } from '../../../../pages/Home/components/LeftContainer';

let wrapper;

const props = {
  classes: {},
  avatar_url: 'some_url',
  bio: 'some',
  blog: 'some blog',
  email: 'someemail@gmail.com',
  location: 'location_test',
  name: 'Juan Ortiz',
  onLogout: jest.fn()
};

describe('Home - LeftContainer', () => {
  beforeAll(() => {
    wrapper = shallow(<LeftContainer {...props} />);
  });

  it('Renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('Renders an avatar', () => {
    expect(wrapper.find(Avatar)).toHaveLength(1);

    expect(wrapper.find(Avatar).props().alt).toEqual(props.email);
    expect(wrapper.find(Avatar).props().src).toEqual(props.avatar_url);
  });

  it('Renders texts correctly', () => {
    expect(wrapper.find(Typography)).toHaveLength(4);
    expect(
      wrapper
        .find(Typography)
        .first()
        .props().children
    ).toEqual(props.name);

    expect(
      wrapper
        .find(Typography)
        .last()
        .props().children
    ).toEqual(props.location);

    expect(
      wrapper
        .find(Typography)
        .at(1)
        .props().children
    ).toEqual(props.email);

    expect(
      wrapper
        .find(Typography)
        .at(2)
        .props().children
    ).toEqual(props.bio);
  });

  it('Shows IconButton okay', () => {
    expect(wrapper.find(IconButton)).toBeDefined();
    expect(wrapper.find(IconButton).props().onClick).toEqual(props.onLogout);
    expect(
      wrapper
        .find(IconButton)
        .children()
        .find(Icon)
    ).toHaveLength(1);
  });
});
