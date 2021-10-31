import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import NotFound from '.';

describe('<NotFound /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<NotFound />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
