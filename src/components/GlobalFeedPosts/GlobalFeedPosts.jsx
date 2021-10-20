import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import LikeComponent from 'components/Like/Like';
import { Container, UserDataContainer, PostContent, ReadMore } from './global-feed-posts.styles';

/**
 * Component showing posts details to be displayed on the Global feed section.
 *
 * @param {Array} posts Array of objects that are the posts to be displayed;
 *
 * @returns  {JSX.Element}.Global feed Posts.
 */
function GlobalFeedPosts({ posts }) {
  const history = useHistory();
  /**
   * takes the user to a different page that display the post in more details.
   *
   * @param {object} post post object that contains the details of this post
   */
  function handleClick(post) {
    history.push({ pathname: `/posts/${post.id}`, state: { detail: post } });
  }

  if (posts.length === 0)
    return (
      <Container>
        <p> No articles are here... yet. </p>
      </Container>
    );

  return posts.map((post) => (
    <>
      <Container>
        <UserDataContainer>
          <MetaInfo post={post} />
          <LikeComponent post={post} />
        </UserDataContainer>
        <PostContent onClick={() => handleClick(post)}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </PostContent>
        <ReadMore onClick={() => handleClick(post)}> Read more...</ReadMore>
      </Container>
    </>
  ));
}

GlobalFeedPosts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
export default GlobalFeedPosts;
