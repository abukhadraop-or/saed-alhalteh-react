import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, LinksList, NavItem, MenuBlock, MenuIcon } from './nav-bar.styles';

/**
 * {String} The logo to be shown in the Nav-bar.
 */
const logo = 'Conduit';

/**
 * {Object[]} that contains the Links title and url to be shown in the Nav-bar.
 */
const items = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Sign In',
    to: '/signIn',
  },
  {
    label: 'Sign Up',
    to: '/signUp',
  },
];

/**
 * Component showing the main navigation bar of the application.
 *
 * @return {JSX.Element} Navigation bar component.
 */
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Revert the status of the menu.
   */
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Logo>
          <Link to="/">{logo}</Link>
        </Logo>
        <LinksList>
          {items.map((item) => (
            <NavItem key={item.label}>
              <Link to={item.to}>{item.label}</Link>
            </NavItem>
          ))}
        </LinksList>
        <MenuIcon onClick={() => handleMenuClick()} />
      </Container>
      {isOpen && (
        <MenuBlock>
          {items.map((item) => (
            <NavItem>
              <Link to={item.to} onClick={() => handleMenuClick()}>
                {item.label}
              </Link>
            </NavItem>
          ))}
        </MenuBlock>
      )}
    </>
  );
}

export default NavBar;
