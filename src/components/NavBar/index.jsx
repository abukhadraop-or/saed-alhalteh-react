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

const menuBlock = React.createRef();

/**
 * The main navigation bar of the application.
 *
 * @return {JSX.Element} NavBar component.
 */
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Handle menuButton on blur event.
   *
   * @param {object} event On blur event.
   */
  const handleBlur = (event) => {
    const target = event && event.relatedTarget;

    if (!target || target.parentElement.parentElement !== menuBlock.current) {
      setIsOpen(false);
    }
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
        <MenuButton onClick={() => setIsOpen(!isOpen)} onBlur={(event) => handleBlur(event)}>
          <MenuIcon />
        </MenuButton>
      </Container>
      {isOpen && (
        <MenuBlock ref={menuBlock}>
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
