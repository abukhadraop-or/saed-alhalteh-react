import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Like from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Like /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Like />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
