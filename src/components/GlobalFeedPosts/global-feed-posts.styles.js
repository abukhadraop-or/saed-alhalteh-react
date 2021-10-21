import styled from 'styled-components';
import LikeComponent from 'components/Like/Like';
import { colors, breakingPoints } from 'shared/styles';

export const Container = styled.div`
  margin: 0 0 1.5625rem 0;
  max-width: 34.375rem;
  padding: 0 0.625rem;

  @media (min-width: ${breakingPoints.mobile}) {
    margin: 0 auto;
  }

  @media (min-width: ${breakingPoints.tablets}) {
    flex-basis: 75%;
    margin: 0 0 0 2.5rem;
  }

  @media (min-width: ${breakingPoints.smallScreen}) {
    max-width: 56.25rem;
  }

  @media (min-width: ${breakingPoints.largeScreen}) {
    margin: 0 0 1.5625rem 6.25rem;
    width: 62.5rem;
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

export const PostContent = styled.div`
  cursor: pointer;
  margin: 0 0.625rem 0 0;

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.1875rem;
  }

  & p {
    color: ${colors.dustyGrey};
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.9375rem;
  }
`;

export const ReadMore = styled.p`
  color: ${colors.dustyGrey};
  cursor: pointer;
  font-size: 0.75rem;
  padding: 0.9375rem 0 0.9375rem;

  &:hover {
    text-decoration: underline;
  }
`;
