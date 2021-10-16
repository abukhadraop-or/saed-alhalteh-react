import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  text-align: center;
  padding: 0 10px;
  max-width: 500px;
  margin: 0 auto;
  & * {
    display: block;
  }
`;
export const Title = styled.h1`
  font: 500 40px 'source sans pro', sans-serif;
  margin: 0;
`;

export const RedirectLink = styled(Link)`
  color: #5cb85c;
  padding: 5px 0 25px;
  text-decoration: none;
  &:hover {
    color: #347634;
    text-decoration: underline;
  }
`;

export const InputBar = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  margin: 25px 0;
  border: 1px solid #acb9b4;
  border-radius: 5px;
  font-size: 1.125rem;
  max-width: 500px;
  box-sizing: border-box;
`;
export const SubmitButton = styled.button`
  color: #fff;
  background-color: #5cb85c;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #347634;
  }
  margin: 0 0 0 auto;
`;
