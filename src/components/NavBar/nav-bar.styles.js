import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from 'assets/Icons/hamburgerMenu.svg';
import { colors, breakingPoints } from 'shared/styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  & a {
    color: ${colors.gray};
    padding: 10px;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
`;

export const Logo = styled.div`
  & a {
    color: ${colors.fern};
    font: 600 1.5rem 'Titillium Web', sans-serif;
    &:hover {
      color: ${colors.fern};
    }
  }
`;

export const LinksList = styled.ul`
  align-self: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  @media (max-width: ${breakingPoints.tablets}) {
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
  fill: ${colors.fern};
  z-index: 2;
  @media (max-width: ${breakingPoints.tablets}) {
    display: inline-block;
  }
`;

export const MenuBlock = styled.div`
  background-color: ${colors.oBlack};
  border: 1px solid ${colors.black};
  border-radius: 15px;
  min-height: 190px;
  position: absolute;
  right: 20px;
  top: 50px;
  width: 120px;

  & a {
    color: ${colors.white};
    display: block;
    font-weight: 600;
    padding: 20px;
    text-decoration: none;
  }
  & li {
    display: block;
    margin: 20px 0;
    & :hover {
      background-color: ${colors.blueViolet};
    }
  }
`;
