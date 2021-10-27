// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { useRouteMatch, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import LikeComponent from 'components/Like/Like';
// import { getPost } from 'services/fakePostsService';
import { HeaderContainer, PostContentContainer, Container, CommentsContainer } from './post.styles';

function Post() {
  // const [post, setPost] = useState({});
  // const match = useRouteMatch();
  const location = useLocation();
  const postToBeRendered = location.state.detail;

  // useEffect(() => {
  //   setPost(getPost(match.params.id));
  // }, []);

  return (
    <>
      <HeaderContainer>
        <h1>{postToBeRendered.title}</h1>
        <Container>
          <MetaInfo author={postToBeRendered.author} />
          <LikeComponent count={postToBeRendered.favoritesCount} />
        </Container>
      </HeaderContainer>
      <PostContentContainer>{postToBeRendered.body}</PostContentContainer>
      <CommentsContainer>
        Comments section will only be available for registered users ....
      </CommentsContainer>
    </>
  );
}

export default Post;
