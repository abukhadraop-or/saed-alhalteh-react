import styled from 'styled-components';
import { colors } from 'styles/colors-and-breaking-points';

export const HeaderContainer = styled.div`
  color: ${colors.white};
  background-color: ${colors.mineShaft};
  padding: 0.9375rem 2.8125rem;
  & h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;

export const PostContentContainer = styled.div`
  padding: 1.5625rem 2.8125rem;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const Container = styled.div`
  display: flex;
`;
export const CommentsContainer = styled.div`
  padding: 1.5625rem 2.8125rem;
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${colors.gray};
`;
