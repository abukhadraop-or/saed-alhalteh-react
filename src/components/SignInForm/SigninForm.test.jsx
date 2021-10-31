import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import SignInForm from '.';

describe('<SignInForm /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<SignInForm />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
