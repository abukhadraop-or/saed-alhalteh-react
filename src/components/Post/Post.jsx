// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { useRouteMatch, useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import MetaInfo from 'components/MetaInfo/MetaInfo';
import LikeComponent from 'components/Like/Like';
// import { getPost } from 'services/fakePostsService';
import { Fragment } from 'react/cjs/react.production.min';
import { HeaderContainer, PostContentContainer, Container, CommentsContainer } from './post.styles';

function Post() {
  // const [post, setPost] = useState({});
  // const match = useRouteMatch();
  const history = useHistory();
  const postToBeRendered = history.location.state.detail;

  // useEffect(() => {
  //   setPost(getPost(match.params.id));
  // }, []);

  return (
    <Fragment>
      <HeaderContainer>
        <h1>{postToBeRendered.title}</h1>
        <Container>
          <MetaInfo post={postToBeRendered} />
          <LikeComponent post={postToBeRendered} />
        </Container>
      </HeaderContainer>
      <PostContentContainer>{postToBeRendered.body}</PostContentContainer>
      <CommentsContainer>
        Comments section will only be available for registered users ....
      </CommentsContainer>
    </Fragment>
  );
}

export default Post;
