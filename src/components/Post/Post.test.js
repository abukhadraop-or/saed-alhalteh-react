import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Post from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Post /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Post />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
