import styled from 'styled-components';
import { colors, breakingPoints } from 'shared/styles';

export const NavLink = styled.ul`
  border-bottom: 0.125rem solid ${colors.concrete};
  list-style-type: none;
  margin: 3.125rem 0 1.563rem 0;
  min-height: 1.875rem;
  padding: 0;
  position: relative;

  @media (min-width: ${breakingPoints.mobile}) and (max-width: ${breakingPoints.tablets}) {
    margin: 3.125rem auto 1.5625rem auto;
    max-width: 37.5rem;
  }

  @media (min-width: ${breakingPoints.tablets}) {
    margin: 3.125rem 2.5rem 1.5625rem 2.5rem;
  }

  @media (min-width: ${breakingPoints.largeScreen}) {
    margin: 3.125rem 6.25rem 1.5625rem 6.25rem;
  }
`;

export const NavItem = styled.li`
  border-bottom: 0.125rem solid ${colors.fern};
  bottom: -0.125rem;
  color: ${colors.fern};
  display: inline-block;
  margin: 0;
  padding: 0.5rem 1rem;
  position: absolute;
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
  @media (min-width: ${breakingPoints.tablets}) {
    flex-basis: 56.25rem;
  }
`;
