import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakingPoints from 'styles/breaking-points';
import colors from 'styles/colors';

export const NavItemsContainer = styled.ul`
  border-bottom: 0.125rem solid ${colors.concrete};
  list-style-type: none;
  margin: 3.125rem 0 1.563rem 0;
  min-height: 1.875rem;
  padding: 0;
  position: relative;

  @media (min-width: ${breakingPoints.mobile}) and (max-width: ${breakingPoints.tablets}) {
    margin: 3.125rem 0 1.5625rem 0;
  }

  @media (min-width: ${breakingPoints.tablets}) {
    margin: 3.125rem 2.5rem 1.5625rem 2.5rem;
  }

  @media (min-width: ${breakingPoints.largeScreen}) {
    margin: 3.125rem 6.25rem 1.5625rem 6.25rem;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
`;

export const NavLink = styled(Link)`
  border-bottom: 0.125rem solid ${colors.green};
  bottom: -0.125rem;
  color: ${colors.green};
  display: inline-block;
  margin: 0;
  padding: 0.5rem 1rem;
  position: absolute;
  text-decoration: none;
`;

export const TagsAndPostsContainer = styled.div`
  @media (min-width: ${breakingPoints.tablets}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  @media (min-width: ${breakingPoints.largeScreen}) {
    justify-content: space-between;
  }
`;

export const PostsDiv = styled.div`
  flex-grow: 1;
`;
