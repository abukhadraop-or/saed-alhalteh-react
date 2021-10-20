import styled from 'styled-components';
import { colors, breakingPoints } from 'shared/styles';

export const TagsContainer = styled.div`
  background-color: ${colors.concrete};
  border-radius: 5px;
  height: fit-content;
  margin: 10px 0 40px 0;
  padding: 5px 10px 20px;
  width: 100%;
  @media (min-width: ${breakingPoints.mobile}) and (max-width: ${breakingPoints.tablets}) {
    margin: 0px auto 40px;
    max-width: 550px;
  }
  @media (min-width: ${breakingPoints.tablets}) {
    flex-basis: 30%;
    margin: 0 40px 0 0;
  }
  @media (min-width: ${breakingPoints.largeScreen}) {
    margin: 0 100px 0 0;
  }
`;
export const Title = styled.h2`
  font-size: 1.25rem;
`;
export const TagsBox = styled.p`
  display: flex;
  flex-wrap: wrap;
  & .selected {
    background-color: ${colors.gray};
    color: ${colors.white};
  }
`;
export const Tag = styled.span`
  background-color: ${colors.silver};
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.875rem;
  margin: 10px;
  padding: 7px;
`;
