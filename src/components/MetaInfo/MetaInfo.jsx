import React from 'react';
import { Link } from 'react-router-dom';
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
  const date = Date.parse(createdAt);
  const dateObj = new Date(date);
  const printDate = dateObj.toDateString();

  return (
    <>
      <MetaInfoContainer>
        <Link to={{ pathname: '/user', state: { author } }}>
          <ProfileImg src={author.image} alt="profile" />
        </Link>
        <NameAndDateContainer>
          <Username to={{ pathname: '/user', state: { author } }}>{author.username}</Username>
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
