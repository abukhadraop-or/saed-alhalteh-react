import App from 'App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

describe('<App /> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
