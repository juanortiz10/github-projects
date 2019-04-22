import React from 'react';
import { shallow } from 'enzyme';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import { UserRepo } from '../../../../pages/Home/components/UserRepos';

describe('Home - UserRepos', () => {
  let wrapper;
  let props = {
    classes: {},
    name: 'test',
    description: 'test',
    created_at: new Date(),
    html_url: 'www.something.com'
  };

  beforeAll(() => {
    wrapper = shallow(<UserRepo {...props} />);
  });

  it('Renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('Renders a card', () => {
    expect(wrapper.find(Card)).toBeDefined();
  });

  it('Shows texts okay', () => {
    expect(
      wrapper
        .find(Typography)
        .at(0)
        .props().children
    ).toEqual(props.name);

    expect(
      wrapper
        .find(Typography)
        .at(1)
        .props().children
    ).toEqual(moment(props.created_at).format('LL'));

    expect(
      wrapper
        .find(Typography)
        .last()
        .props().children
    ).toEqual(props.description);
  });

  it('Renders a link okay', () => {
    expect(
      wrapper
        .find(`#${props.name}`)
        .children()
        .first()
    ).toBeDefined();

    expect(
      wrapper
        .find(`#${props.name}`)
        .children()
        .first()
        .props().href
    ).toEqual(props.html_url);
  });
});
