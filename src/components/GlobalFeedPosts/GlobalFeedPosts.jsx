import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import {
  Container,
  UserDataContainer,
  Like,
  PostContent,
  ReadMore,
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
  const history = useHistory();
  /**
   * Takes the user to a different page that displays the post in more details.
   *
   * @param {Object} post The Post object that contains the details of this post.
   */
  const handleClick = (post) => {
    history.push({ pathname: `/posts`, state: { detail: post } });
  };

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
          <PostContent onClick={() => handleClick(post)}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </PostContent>
          <ReadMore onClick={() => handleClick(post)}> Read more...</ReadMore>
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
