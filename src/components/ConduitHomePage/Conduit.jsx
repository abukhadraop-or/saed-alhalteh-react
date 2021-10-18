import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Banner from 'components/Banner/Banner';
import GlobalFeed from '../GlobalFeed/GlobalFeed';

/**
 * Component showing home page of the application.
 *
 * @returns JSX element that forms the main content of the home page.
 */
function Conduit() {
  return (
    <Fragment>
      <Banner />
      <GlobalFeed />
    </Fragment>
  );
}

export default Conduit;
