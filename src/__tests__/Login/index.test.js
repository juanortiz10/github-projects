import React from 'react';
import { shallow } from 'enzyme';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { Login } from '../../pages/Login';

/* Shallow redering */
let wrapper;

describe('<Login/>', () => {
  beforeAll(() => {
    const props = {
      getGithubToken: jest.fn(),
      classes: {}
    };

    wrapper = shallow(<Login {...props} />);
  });

  it('Renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('Renders <Card/> component', () => {
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('Renders initial props', () => {
    expect(wrapper.instance().props).toBeDefined();
    expect(wrapper.instance().props.getGithubToken).toBeDefined();
    expect(wrapper.instance().props.classes).toEqual({});
  });

  it('Test handleSuccess function', () => {
    const object = {
      code: 'sample'
    };

    wrapper.instance().handleSuccess(object);
    expect(wrapper.instance().props.getGithubToken).toHaveBeenCalled();
  });

  it('Show alert to users if there is an error', () => {
    global.alert = jest.fn();
    wrapper.instance().handleOnFailure({ error: 'Something went wrong ' });
    expect(global.alert).toHaveBeenCalled();
  });
});
