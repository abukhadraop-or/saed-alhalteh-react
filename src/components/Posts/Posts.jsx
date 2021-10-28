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
} from './posts.styles';

/**
 * Posts details.
 *
 * @param {object} props The props object.
 * @param {object[]} props.posts Posts.
 *
 * @return {JSX.Element} Posts component.
 */
function Posts({ posts }) {
  return posts.length === 0 ? (
    <Container>
      <p> No articles are here... yet. </p>
    </Container>
  ) : (
    posts.map((post) => (
      <Container key={post.slug}>
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
    ))
  );
}

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
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
  ),
};

export default Posts;
