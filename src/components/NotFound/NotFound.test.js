import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import NotFound from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<NotFound /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<NotFound />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
