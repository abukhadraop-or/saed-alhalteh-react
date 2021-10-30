import LikeComponent from 'components/Like';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakingPoints from 'styles/breaking-points';
import colors from 'styles/colors';

export const Container = styled.div`
  padding: 0 0.625rem;

  @media (min-width: ${breakingPoints.mobile}) {
    margin: 0 auto;
  }

  @media (min-width: ${breakingPoints.tablets}) {
    margin: 0 0 0 2.5rem;
    padding: 0 2rem 0 0.625rem;
  }

  @media (min-width: ${breakingPoints.largeScreen}) {
    margin: 0 0 0 6.25rem;
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  padding: 0 1.25rem 0 0;
`;

export const Like = styled(LikeComponent)`
  & span {
    margin: 0;
  }

  @media (min-width: ${breakingPoints.tablets}) {
    margin: 0 0.9375rem 0 auto;
  }
`;

export const PostContent = styled(Link)`
  display: inline-block;
  text-decoration: none;

  & h2 {
    color: ${colors.black};
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  & p {
    color: ${colors.dustyGrey};
    font-size: 1rem;
    font-weight: 300;
    margin: 0.25rem 0;
  }
`;

export const ReadMoreDiv = styled.div`
  padding: 0.5rem 0 1.5rem;
`;

export const ReadMoreLink = styled(Link)`
  color: ${colors.dustyGrey};
  cursor: pointer;
  font-size: 0.75rem;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
