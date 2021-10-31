import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Like from '.';

const likeProps = {
  count: 0,
};

describe('<Like /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Like count={likeProps.count} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
