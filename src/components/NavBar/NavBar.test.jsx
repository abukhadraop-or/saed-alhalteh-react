import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import NavBar from '.';
import { MenuBlock, MenuButton } from './nav-bar.styles';

let wrapper;
const elements = {
  menuButton: () => wrapper.find(MenuButton),
  menuBlock: () => wrapper.find(MenuBlock),
};

describe('<NavBar /> tests', () => {
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('toggles the displays of the MenuBlock when MenuButton is clicked', () => {
    elements.menuButton().simulate('click');

    expect(elements.menuBlock().length).toBe(1);

    elements.menuButton().simulate('click');

    expect(elements.menuBlock().length).toBe(0);
  });

  it('hides the MenuBlock when a link is clicked', () => {
    elements.menuButton().simulate('click');
    elements.menuBlock().find('Link').at(0).simulate('click');

    expect(elements.menuBlock().length).toBe(0);
  });

  describe('#handleBlur', () => {
    it('hides menuBlock when clicking on null', () => {
      elements.menuButton().simulate('click');
      elements.menuButton().simulate('blur');

      expect(elements.menuBlock().length).toBe(0);
    });

    it('hides menuBlock when clicking on different element', () => {
      const event = {
        relatedTarget: { parentElement: 'a' },
        _reactName: 'onBlur',
      };

      elements.menuButton().simulate('click');
      elements.menuButton().simulate('blur', event);

      expect(elements.menuBlock().length).toBe(0);
    });
  });
});
