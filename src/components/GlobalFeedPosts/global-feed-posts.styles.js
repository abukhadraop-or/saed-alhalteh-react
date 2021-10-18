import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 0 25px 0;
  max-width: 550px;
  padding: 0 10px;
  width: 100%;
  @media (min-width: 550px) {
    margin: 0px auto;
  }
  @media (min-width: 830px) {
    flex-basis: 75%;
    margin: 0 0 0 40px;
    width: 90%;
  }
  @media (min-width: 1000px) {
    max-width: 900px;
  }
  @media (min-width: 1400px) {
    margin: 0px 0 25px 100px;
    width: 1000px;
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  padding: 0 20px 0 0;
  & :nth-child(2) {
    @media (min-width: 830px) {
      margin: 0 15px 0 auto;
    }
    & span {
      margin: 0;
    }
  }
`;

export const PostContent = styled.div`
  cursor: pointer;
  margin: 0 10px 0 0;
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 3px;
  }
  & p {
    color: #999;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 15px;
  }
`;

export const ReadMore = styled.p`
  color: #999;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 15px 0 15px;
  &: hover {
    text-decoration: underline;
  }
`;
