import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from 'assets/Icons/hamburgerMenu.svg';
import { colors, breakingPoints } from 'shared/styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;

  & a {
    color: ${colors.gray};
    padding: 0.625rem;
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

  @media (max-width: ${breakingPoints.tablets}) {
    display: inline-block;
  }
`;

export const MenuBlock = styled.div`
  background-color: ${colors.oBlack};
  border: 0.0625rem solid ${colors.black};
  border-radius: 0.9375rem;
  min-height: 11.875rem;
  position: absolute;
  right: 1.25rem;
  top: 3.125rem;
  width: 7.5rem;

  & a {
    color: ${colors.white};
    display: block;
    font-weight: 600;
    padding: 1.25rem;
    text-decoration: none;
  }

  & li {
    display: block;
    margin: 1.25rem 0;

    & :hover {
      background-color: ${colors.blueViolet};
    }
  }
`;
