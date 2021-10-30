import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import MetaInfo from '.';

Enzyme.configure({ adapter: new Adapter() });

const metaInfoProps = {
  author: {
    username: 'Jack',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Crystal_personal.svg/1024px-Crystal_personal.svg.png',
  },
  createdAt: '2016-02-18T03:22:56.637Z',
};

describe('<MetaInfo/> tests', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(
      <MetaInfo author={metaInfoProps.author} createdAt={metaInfoProps.createdAt} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
