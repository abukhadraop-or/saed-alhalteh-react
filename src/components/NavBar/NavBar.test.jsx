import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import NavBar from '.';
import { MenuBlock, MenuButton } from './nav-bar.styles';

describe('<NavBar /> tests', () => {
  let wrapper;
  const elements = {
    MenuButton: () => wrapper.find(MenuButton),
    MenuBlock: () => wrapper.find(MenuBlock),
  };

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('toggles the displays of the MenuBlock when MenuButton is clicked', () => {
    elements.MenuButton().simulate('click');

    expect(elements.MenuBlock().length).toBe(1);

    elements.MenuButton().simulate('click');

    expect(elements.MenuBlock().length).toBe(0);
  });

  it('hides the MenuBlock when a link is clicked', () => {
    elements.MenuButton().simulate('click');
    elements.MenuBlock().find('Link').at(0).simulate('click');

    expect(elements.MenuBlock().length).toBe(0);
  });

  describe('#handleBlur', () => {
    it('hides menuBlock when clicking on null', () => {
      elements.MenuButton().simulate('click');
      elements.MenuButton().simulate('blur');

      expect(elements.MenuBlock().length).toBe(0);
    });

    it('hides menuBlock when clicking on different element', () => {
      const event = {
        relatedTarget: { parentElement: 'a' },
        _reactName: 'onBlur',
      };

      elements.MenuButton().simulate('click');
      elements.MenuButton().simulate('blur', event);

      expect(elements.MenuBlock().length).toBe(0);
    });
  });
});
