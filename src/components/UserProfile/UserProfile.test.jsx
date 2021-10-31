import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import UserProfile from '.';

describe('<UserProfile /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<UserProfile />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
