import { ReactComponent as LikeLogo } from 'assets/Icons/likeLogoSolid.svg';
import styled from 'styled-components';

export const LikeBox = styled.div`
  align-self: center;
  border: 2px solid #5cb85c;
  border-radius: 5px;
  color: #5cb85c;
  cursor: pointer;
  margin: 0 0 0 auto;
  padding: 5px 15px;
  &:hover {
    background-color: #5cb85c;
    color: #fff;
    & svg {
      fill: #fff;
    }
  }
  & span {
    vertical-align: middle;
  }
`;
export const Like = styled(LikeLogo)`
  fill: #5cb85c;
  margin: 0 5px 0 0;
  vertical-align: middle;
`;
