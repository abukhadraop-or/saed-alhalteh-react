import styled from 'styled-components';

export const PaginationList = styled.ul`
  list-style: none;
  text-align: center;
  & :nth-child(${(props) => props.currentPage}) {
    background-color: #5cb85c;
    color: white;
  }
  @media (min-width: 830px) {
    width: 75%;
  }
`;

export const PaginationLink = styled.li`
  border: 1px solid #5cb85c;
  border-radius: 3px;
  color: #5cb85c;
  cursor: pointer;
  display: inline-block;
  margin: 0 5px 0 0;
  padding: 7px;
`;
