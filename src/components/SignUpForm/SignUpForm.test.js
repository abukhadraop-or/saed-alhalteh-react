import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import SignUpForm from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignUpForm /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<SignUpForm />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
