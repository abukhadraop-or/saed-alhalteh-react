import MetaInfo from 'components/MetaInfo/MetaInfo';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  Like,
  PostContent,
  ReadMoreDiv,
  ReadMoreLink,
  UserDataContainer,
} from './global-feed-posts.styles';

/**
 * Component showing posts details to be displayed on the Global feed section.
 *
 * @param {Object} props The props object.
 * @param {Object[]} props.posts Array of objects that contains details about each post.
 *
 * @return {JSX.Element} Global feed Posts.
 */
function GlobalFeedPosts({ posts }) {
  return posts.length === 0 ? (
    <Container>
      <p> No articles are here... yet. </p>
    </Container>
  ) : (
    posts.map((post) => (
      <>
        <Container>
          <UserDataContainer>
            <MetaInfo author={post.author} createdAt={post.createdAt} />
            <Like count={post.favoritesCount} />
          </UserDataContainer>
          <PostContent to={{ pathname: '/posts', state: { detail: post } }}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </PostContent>
          <ReadMoreDiv>
            <ReadMoreLink to={{ pathname: '/posts', state: { detail: post } }}>
              Read more...
            </ReadMoreLink>
          </ReadMoreDiv>
        </Container>
      </>
    ))
  );
}

GlobalFeedPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      favoritesCount: PropTypes.number,
      createdAt: PropTypes.string,
      author: PropTypes.shape({
        username: PropTypes.string,
        bio: PropTypes.string,
        image: PropTypes.string,
        following: PropTypes.bool,
      }),
    })
  ).isRequired,
};

export default GlobalFeedPosts;
