import React from 'react';
import { BannerContainer, BannerDescription, BannerTitle } from './banner.styles';

/**
 * Component shows the Banner of the Application.
 *
 * @return {JSX.Element} Banner component.
 */
function Banner() {
  return (
    <BannerContainer>
      <BannerTitle> Conduit </BannerTitle>
      <BannerDescription> A place to share your knowledge </BannerDescription>
    </BannerContainer>
  );
}

export default Banner;
