import styled from 'styled-components';

export const TagsContainer = styled.div`
  background-color: #f3f3f3;
  border-radius: 5px;
  height: fit-content;
  margin: 10px 0 40px 0;
  padding: 5px 10px 20px;
  width: 100%;
  @media (min-width: 550px) and (max-width: 830px) {
    margin: 0px auto 40px;
    max-width: 550px;
  }
  @media (min-width: 830px) {
    flex-basis: 30%;
    margin: 0 40px 0 0;
  }
  @media (min-width: 1400px) {
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
    background-color: #868686;
    color: #fff;
  }
`;
export const Tag = styled.span`
  background-color: #c8c8c8;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.875rem;
  margin: 10px;
  padding: 7px;
`;
