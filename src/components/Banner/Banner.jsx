import React from 'react';
import { BannerContainer, BannerTitle, BannerDescription } from './banner.styles';

/**
 * Component showing the Banner of the Application.
 *
 * @returns JSX element that forms the banner.
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
