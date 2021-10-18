import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import { Container, Logo, LinksList, NavItem, MenuBlock, MenuIcon } from './nav-bar.styles';

/**
 * Component showing the main navigation bar of the application.
 *
 * @returns JSX element that forms the navigation bar.
 */
function NavBar() {
  const [logo] = useState('Conduit');
  const [items] = useState([
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
  ]);
  const [menuStatus, setMenuStatus] = useState(false);

  /**
   * revert the status of the menu.
   */
  function handleMenuClick() {
    setMenuStatus(!menuStatus);
  }

  return (
    <Fragment>
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
      {menuStatus && (
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
    </Fragment>
  );
}

export default NavBar;
