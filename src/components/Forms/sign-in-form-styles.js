import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'styles/colors-and-breaking-points';

export const FormContainer = styled.div`
  text-align: center;
  padding: 0 0.625rem;
  max-width: 31.25rem;
  margin: 0 auto;
  & * {
    display: block;
  }
`;
export const Title = styled.h1`
  font: 500 2.5rem 'source sans pro', sans-serif;
  margin: 0;
`;

export const RedirectLink = styled(Link)`
  color: ${colors.fern};
  padding: 0.3125rem 0 1.5625rem;
  text-decoration: none;
  &:hover {
    color: ${colors.goblin};
    text-decoration: underline;
  }
`;

export const InputBar = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  margin: 1.5625rem 0;
  border: 0.0625rem solid ${colors.edward};
  border-radius: 0.3125rem;
  font-size: 1.125rem;
  max-width: 31.25rem;
  box-sizing: border-box;
`;
export const SubmitButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.fern};
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.9375rem 1.5625rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.goblin};
  }
  margin: 0 0 0 auto;
`;
