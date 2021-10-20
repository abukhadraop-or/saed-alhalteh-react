import styled from 'styled-components';
import { colors, breakingPoints } from 'shared/styles';

export const PaginationList = styled.ul`
  list-style: none;
  text-align: center;
  & :nth-child(${(props) => props.currentPage}) {
    background-color: ${colors.fern};
    color: ${colors.white};
  }
  @media (min-width: ${breakingPoints.tablets}) {
    width: 75%;
  }
`;

export const PaginationLink = styled.li`
  border: 1px solid ${colors.fern};
  border-radius: 3px;
  color: ${colors.fern};
  cursor: pointer;
  display: inline-block;
  margin: 0 5px 0 0;
  padding: 7px;
`;
