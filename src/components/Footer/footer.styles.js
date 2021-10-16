import styled from 'styled-components';
import { ReactComponent as GithubLogo } from 'assets/Icons/githublogo.svg';

export const FooterContainer = styled.div`
  align-items: center;
  background: linear-gradient(#485563, #29323c);
  display: flex;
  font-size: 2rem;
  height: 80px;
  justify-content: center;
  text-align: center;
  width: 100%;
  & a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled(GithubLogo)`
  fill: #fff;
  padding: 0 15px 0 0;
  transform: scale(1.5);
`;
