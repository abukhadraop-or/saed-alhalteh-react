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
 * Component that shows the post's author username and image, and the date when the posts was created.
 *
 * @param {Object} props The props object.
 * @param {Object} props.author Object contains details about the post's author.
 * @param {String} props.createdAt The date when the post created.
 *
 * @return {JSX.Element} MetaInfo component.
 */
function MetaInfo({ author, createdAt }) {
  const history = useHistory();
  const date = Date.parse(createdAt);
  const dateObj = new Date(date);
  const printDate = dateObj.toDateString();

  /**
   * Takes the user to a different page that displays the post's author profile.
   *
   * @param {object} post Post object that contains the details of this post.
   */
  const handelClick = () => {
    history.push({ pathname: `/user`, state: { detail: author } });
  };

  return (
    <>
      <MetaInfoContainer>
        <ProfileImg onClick={() => handelClick(author)} src={author.image} alt="profile" />
        <NameAndDateContainer>
          <Username onClick={() => handelClick(author)}>{author.username}</Username>
          <PublishDate>{printDate}</PublishDate>
        </NameAndDateContainer>
      </MetaInfoContainer>
    </>
  );
}

MetaInfo.propTypes = {
  author: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default MetaInfo;
