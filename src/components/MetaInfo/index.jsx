import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MetaInfoContainer,
  NameAndDateContainer,
  ProfileImg,
  PublishDate,
  Username,
} from './meta-info.styles';

/**
 * Meta information about the post.
 *
 * @param {object} props The props object.
 * @param {object} props.author  Post's author information.
 * @param {string} props.createdAt The date when the post was created.
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
