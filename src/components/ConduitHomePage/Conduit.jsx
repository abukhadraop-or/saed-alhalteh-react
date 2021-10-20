import React from 'react';
import Banner from 'components/Banner/Banner';
import GlobalFeed from 'components/GlobalFeed/GlobalFeed';

/**
 * Component showing home page of the application.
 *
 * @returns JSX element that forms the main content of the home page.
 */
function Conduit() {
  return (
    <>
      <Banner />
      <GlobalFeed />
    </>
  );
}

export default Conduit;
