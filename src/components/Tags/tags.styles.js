import styled from 'styled-components';
import breakingPoints from 'styles/breaking-points';
import colors from 'styles/colors';

export const TagsContainer = styled.div`
  background-color: ${colors.concrete};
  border-radius: 0.3125rem;
  height: fit-content;
  margin: 0.625rem 0 2.5rem 0;
  padding: 0.3125rem 0.625rem 1.25rem;

  @media (min-width: ${breakingPoints.tablets}) {
    flex-basis: 30%;
    margin: 0 2.5rem 0 0;
  }

  @media (min-width: ${breakingPoints.largeScreen}) {
    margin: 0 6.25rem 0 0;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
`;

export const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.button`
  background-color: ${(props) => (props.isClicked ? colors.partiallyDarkBlack : colors.silver)};
  border: none;
  border-radius: 0.9375rem;
  color: ${(props) => (props.isClicked ? colors.white : colors.black)};
  cursor: pointer;
  font-size: 0.875rem;
  margin: 0.625rem;
  padding: 0.4375rem;
`;
