import styled from 'styled-components';
import { colors } from 'shared/styles';

export const BannerContainer = styled.div`
  background-color: ${colors.fern};
  box-shadow: inset 0 0.5rem 0.5rem -0.5rem ${colors.o3Black},
    inset 0 -0.5rem 0.5rem -0.5rem ${colors.o3Black};
  color: ${colors.white};
  padding: 1.55rem;
  text-align: center;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 1.55rem;
  text-shadow: 0 0.06rem 0.18rem ${colors.black};
`;

export const BannerDescription = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
`;
