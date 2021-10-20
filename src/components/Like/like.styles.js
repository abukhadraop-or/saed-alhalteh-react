import { ReactComponent as LikeLogo } from 'assets/Icons/likeLogoSolid.svg';
import styled from 'styled-components';
import { colors } from 'shared/styles';

export const LikeBox = styled.div`
  align-self: center;
  border: 2px solid ${colors.fern};
  border-radius: 5px;
  color: ${colors.fern};
  cursor: pointer;
  margin: 0 0 0 auto;
  padding: 5px 15px;
  &:hover {
    background-color: ${colors.fern};
    color: ${colors.white};
    & svg {
      fill: ${colors.white};
    }
  }
  & span {
    vertical-align: middle;
  }
`;
export const Like = styled(LikeLogo)`
  fill: ${colors.fern};
  margin: 0 5px 0 0;
  vertical-align: middle;
`;
