import React from 'react';
import Banner from 'components/Banner/Banner';
import GlobalFeed from 'components/GlobalFeed/GlobalFeed';

/**
 * Component shows the home page of the application.
 *
 * @return {JSX.Element} Home page component.
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
