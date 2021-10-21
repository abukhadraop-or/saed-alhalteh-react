import React from 'react';
import PropTypes from 'prop-types';
import { LikeBox, Like } from './like.styles';

/**
 * Component showing number of likes for this post.
 *
 * @param {Object} props The props object.
 * @param {Number} props.count Number of likes on the current item.
 *
 * @return {JSX.Element} Like component.
 */
function LikeComponent({ count }) {
  return (
    <LikeBox>
      <Like />
      <span>{count}</span>
    </LikeBox>
  );
}

LikeComponent.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LikeComponent;
