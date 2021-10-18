import React from 'react';
import PropTypes from 'prop-types';
import { LikeBox, Like } from './like.styles';

/**
 * Component showing number of likes for this post.
 *
 *
 * @returns  {JSX.Element}.Like box.
 */
function LikeComponent({ post }) {
  return (
    <LikeBox>
      <Like />
      <span>{post.favoritesCount}</span>
    </LikeBox>
  );
}
LikeComponent.propTypes = {
  post: PropTypes.shape({
    favoritesCount: PropTypes.number.isRequired,
  }).isRequired,
};
export default LikeComponent;
