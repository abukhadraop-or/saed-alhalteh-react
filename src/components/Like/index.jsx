import PropTypes from 'prop-types';
import React from 'react';
import { Like, LikeBox } from './like.styles';

/**
 * Like button and likes count for the post.
 *
 * @param {object} props The props object.
 * @param {number} props.count Number of likes on the post.
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
