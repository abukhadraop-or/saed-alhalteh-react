import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MetaInfoContainer,
  ProfileImg,
  Username,
  PublishDate,
  NameAndDateContainer,
} from './meta-info.styles';

/**
 * Component showing Meta Info about the post.
 *
 * @returns  {JSX.Element}. Elements that includes some info about the post(author username, image, and the date when the posts was created).
 */
function MetaInfo({ post }) {
  const history = useHistory();
  const date = Date.parse(post.createdAt);
  const dateObj = new Date(date);
  const printDate = dateObj.toDateString();
  /**
   * takes the user to a different page that displays the post author's profile.
   *
   * @param {object} post post object that contains the details of this post
   */
  function handelClick() {
    history.push({ pathname: `/user`, state: { detail: post } });
  }

  return (
    <div>
      <MetaInfoContainer>
        <ProfileImg onClick={() => handelClick(post)} src={post.author.image} alt="profile" />
        <NameAndDateContainer>
          <Username onClick={() => handelClick(post)}>{post.author.username}</Username>
          <PublishDate>{printDate}</PublishDate>
        </NameAndDateContainer>
      </MetaInfoContainer>
    </div>
  );
}
MetaInfo.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
    createdAt: PropTypes.string,
  }).isRequired,
};
export default MetaInfo;
