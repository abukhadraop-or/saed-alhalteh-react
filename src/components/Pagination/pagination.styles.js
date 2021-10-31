import styled from 'styled-components';
import colors from 'styles/colors';

export const PaginationList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;

  & li:nth-child(${(props) => props.currentPage}) {
    & button {
      background-color: ${colors.green};
      color: ${colors.white};
    }
  }
`;

export const PaginationItem = styled.li`
  display: inline-block;
`;

export const PaginationButton = styled.button`
  background-color: ${colors.white};
  border: 0.0625rem solid ${colors.green};
  border-radius: 0.1875rem;
  color: ${colors.green};
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  margin: 0 0.3125rem 0 0;
  padding: 0.4375rem;
`;
