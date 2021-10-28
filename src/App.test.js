import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from 'App';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe('<App /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
