import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  LinksList,
  Logo,
  MenuBlock,
  MenuButton,
  MenuIcon,
  NavItem,
} from './nav-bar.styles';

/**
 * @type {string} The logo.
 */
const logo = 'Conduit';

/**
 * @type {object<string, string>[]} Links label and url.
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
 * The main navigation bar of the application.
 *
 * @return {JSX.Element} NavBar component.
 */
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </MenuButton>
      </Container>
      {isOpen && (
        <MenuBlock>
          {items.map((item) => (
            <NavItem key={item.label}>
              <Link to={item.to} onClick={() => setIsOpen(!isOpen)}>
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
