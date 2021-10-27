import styled from 'styled-components';
import { colors } from 'styles/colors-and-breaking-points';

export const PaginationList = styled.ul`
  list-style: none;
  text-align: center;

  & li:nth-child(${(props) => props.currentPage}) {
    & button {
      background-color: ${colors.fern};
      color: ${colors.white};
    }
  }
`;

export const PaginationItem = styled.li`
  display: inline-block;
`;

export const PaginationLink = styled.button`
  background-color: transparent;
  border: 0.0625rem solid ${colors.fern};
  border-radius: 0.1875rem;
  color: ${colors.fern};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  margin: 0 0.3125rem 0 0;
  padding: 0.4375rem;
`;
