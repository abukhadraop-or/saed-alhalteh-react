import styled from 'styled-components';
import { colors, breakingPoints } from 'shared/styles';

export const NavLink = styled.ul`
  border-bottom: 2px solid ${colors.concrete};
  list-style-type: none;
  margin: 50px 0 25px 0;
  min-height: 30px;
  padding: 0;
  position: relative;
  @media (min-width: ${breakingPoints.mobile}) and (max-width: ${breakingPoints.tablets}) {
    margin: 50px auto 25px auto;
    max-width: 600px;
  }
  @media (min-width: ${breakingPoints.tablets}) {
    margin: 50px 40px 25px 40px;
  }
  @media (min-width: ${breakingPoints.largeScreen}) {
    margin: 50px 100px 25px 100px;
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid ${colors.fern};
  bottom: -2px;
  color: ${colors.fern};
  display: inline-block;
  margin: 0;
  padding: 8px 16px;
  position: absolute;
`;

export const MainContainer = styled.div``;

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
    flex-basis: 900px;
  }
`;
