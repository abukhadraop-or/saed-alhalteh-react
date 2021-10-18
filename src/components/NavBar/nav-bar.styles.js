import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from 'assets/Icons/hamburgerMenu.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  & a {
    color: grey;
    padding: 10px;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
`;

export const Logo = styled.div`
  & a {
    color: #5cb85c;
    font: 600 1.5rem 'Titillium Web', sans-serif;
    &:hover {
      color: #5cb85c;
    }
  }
`;

export const LinksList = styled.ul`
  align-self: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const MenuIcon = styled(HamburgerMenu)`
  align-self: center;
  cursor: pointer;
  display: none;
  fill: #5cb85c;
  z-index: 2;
  @media (max-width: 800px) {
    display: inline-block;
  }
`;

export const MenuBlock = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  border: 1px solid #000;
  border-radius: 15px;
  min-height: 190px;
  position: absolute;
  right: 20px;
  top: 50px;
  width: 120px;

  & a {
    color: white;
    display: block;
    font-weight: 600;
    padding: 20px;
    text-decoration: none;
  }
  & li {
    display: block;
    margin: 20px 0;
    & :hover {
      background-color: #4f52b0;
    }
  }
`;
