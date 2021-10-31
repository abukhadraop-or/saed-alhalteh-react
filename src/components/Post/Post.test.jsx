import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Post from '.';

describe('<Post /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Post />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
