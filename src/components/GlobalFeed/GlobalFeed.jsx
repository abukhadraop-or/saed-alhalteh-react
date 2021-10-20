import React, { useEffect, useState } from 'react';
import PopularTags from 'components/PopularTags/PopularTags';
import GlobalFeedPosts from 'components/GlobalFeedPosts/GlobalFeedPosts';
import Pagination from 'components/Pagination/Pagination';
import { getFilteredPosts } from 'services/fakePostsService';
import {
  NavLink,
  NavItem,
  MainContainer,
  TagsAndPostsContainer,
  PostsDiv,
} from './global-feed.styles';

/**
 * Allowed number of posts per page.
 */
const pageSize = 5;

/**
 * Component showing global feed navigation-bar and posts.
 *
 * @returns  {JSX.Element}.Global feed section that contains nav bar and posts.
 */
function GlobalFeed() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [totalFilteredPostsCount, setTotalFilteredPostsCount] = useState();

  useEffect(() => {
    const data = getFilteredPosts(currentPage, pageSize, selectedTags);
    setPosts(data.posts);
    setTotalFilteredPostsCount(data.count);
  }, [currentPage, selectedTags]);

  function handlePaginationClick(page) {
    setCurrentPage(page);
  }

  function handleTagClick(tag) {
    const tagsArray = selectedTags;
    if (tagsArray.indexOf(tag) !== -1) {
      tagsArray.splice(tagsArray.indexOf(tag), 1);
    } else {
      tagsArray.push(tag);
    }
    setCurrentPage(1);
    setSelectedTags([...tagsArray]);
  }

  return (
    <MainContainer>
      <NavLink>
        <NavItem> Global Feed</NavItem>
      </NavLink>
      <TagsAndPostsContainer>
        <PopularTags onClick={(tag) => handleTagClick(tag)} />
        <PostsDiv>
          <GlobalFeedPosts posts={posts} />
        </PostsDiv>
      </TagsAndPostsContainer>
      <Pagination
        count={totalFilteredPostsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onClick={(page) => handlePaginationClick(page)}
      />
    </MainContainer>
  );
}

export default GlobalFeed;
