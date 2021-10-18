import React from 'react';
import { FooterContainer, Logo } from './footer.styles';

/**
 *Component showing global Footer of the Application.
 *
 * @returns JSX element that forms the Footer of the page.
 */
function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        Fork on GitHub
      </a>
    </FooterContainer>
  );
}

export default Footer;
