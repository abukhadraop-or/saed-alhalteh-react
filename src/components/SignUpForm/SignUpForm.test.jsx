import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import SignUpForm from '.';

describe('<SignUpForm /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<SignUpForm />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
