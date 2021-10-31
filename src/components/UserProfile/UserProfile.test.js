import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import UserProfile from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<UserProfile /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<UserProfile />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
