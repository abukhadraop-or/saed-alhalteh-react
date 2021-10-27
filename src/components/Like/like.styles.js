import { ReactComponent as LikeLogo } from 'assets/icons/like-logo.svg';
import styled from 'styled-components';
import { colors } from 'styles/colors-and-breaking-points';

export const LikeBox = styled.button`
  align-self: center;
  background-color: transparent;
  border: 0.125rem solid ${colors.fern};
  border-radius: 0.3125rem;
  color: ${colors.fern};
  cursor: pointer;
  margin: 0 0 0 auto;
  padding: 0.3125rem 0.9375rem;

  &:hover {
    background-color: ${colors.fern};
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
  fill: ${colors.fern};
  margin: 0 0.3125rem 0 0;
  vertical-align: middle;
`;
