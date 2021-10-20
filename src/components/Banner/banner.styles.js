import styled from 'styled-components';
import { colors } from 'shared/styles';

export const BannerContainer = styled.div`
  background-color: ${colors.fern};
  box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
  color: ${colors.white};
  padding: 25px;
  text-align: center;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 25px;
  text-shadow: 0 1px 3px ${colors.black};
`;

export const BannerDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
`;
