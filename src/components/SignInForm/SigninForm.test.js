import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import SignInForm from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignInForm /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<SignInForm />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
