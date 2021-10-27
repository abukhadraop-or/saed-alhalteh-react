import { ReactComponent as LikeLogo } from 'assets/icons/like-logo.svg';
import styled from 'styled-components';
import colors from 'styles/colors';

export const LikeBox = styled.button`
  align-self: center;
  background-color: ${colors.white};
  border: 0.125rem solid ${colors.green};
  border-radius: 0.3125rem;
  color: ${colors.green};
  cursor: pointer;
  margin: 0 0 0 auto;
  padding: 0.3125rem 0.9375rem;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.white};

    & svg {
      fill: ${colors.white};
    }
  }

  & span {
    font-size: 1rem;
    vertical-align: middle;
  }
`;

export const Like = styled(LikeLogo)`
  fill: ${colors.green};
  margin: 0 0.3125rem 0 0;
  vertical-align: middle;
`;
