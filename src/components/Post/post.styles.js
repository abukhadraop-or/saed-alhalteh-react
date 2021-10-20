import styled from 'styled-components';
import { colors } from 'shared/styles';

export const HeaderContainer = styled.div`
  color: ${colors.white};
  background-color: ${colors.mineShaft};
  padding: 15px 45px;
  & h1 {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;

export const PostContentContainer = styled.div`
  padding: 25px 45px;
  font-size: 1.25rem;
  line-height: 1.5;
`;

export const Container = styled.div`
  display: flex;
`;
export const CommentsContainer = styled.div`
  padding: 25px 45px;
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${colors.gray};
`;
