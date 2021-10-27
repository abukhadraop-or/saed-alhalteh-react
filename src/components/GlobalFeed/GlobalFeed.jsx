import React, { useEffect, useState } from 'react';
import PopularTags from 'components/PopularTags/PopularTags';
import GlobalFeedPosts from 'components/GlobalFeedPosts/GlobalFeedPosts';
import Pagination from 'components/Pagination/Pagination';
import fakeService from 'services/fake-posts-service';
import {
  NavItemsContainer,
  NavItem,
  NavLink,
  TagsAndPostsContainer,
  PostsDiv,
} from './global-feed.styles';

/**
 * {Number} Maximum number of posts per page.
 */
const pageSize = 5;

/**
 * Component showing global-feed navigation-bar and posts.
 *
 * @return {JSX.Element} Global feed component.
 */
function GlobalFeed() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [postsCount, setPostsCount] = useState(0);

  /**
   * Gets the posts to be displayed on the page from the API.
   */
  useEffect(() => {
    const data = fakeService.getFilteredPosts(currentPage, pageSize, selectedTags);
    setPosts(data.posts);
    setPostsCount(data.count);
  }, [currentPage, selectedTags]);

  /**
   * Updates the state variable "currentPage".
   *
   * @param {Number} page The number of the current page.
   */
  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  /**
   * Updates the state variable "selectedTags".
   *
   * @param {String} tag The tag which was clicked on.
   */
  const handleTagClick = (tag) => {
    const tagsArray = selectedTags;

    if (tagsArray.indexOf(tag) !== -1) {
      tagsArray.splice(tagsArray.indexOf(tag), 1);
    } else {
      tagsArray.push(tag);
    }

    setSelectedTags([...tagsArray]);
    handlePaginationClick(1);
  };

  return (
    <>
      <NavItemsContainer>
        <NavItem>
          <NavLink to="/"> Global Feed</NavLink>
        </NavItem>
      </NavItemsContainer>
      <TagsAndPostsContainer>
        <PopularTags onClick={(tag) => handleTagClick(tag)} selectedTags={selectedTags} />
        <PostsDiv>
          <GlobalFeedPosts posts={posts} />
        </PostsDiv>
      </TagsAndPostsContainer>
      <Pagination
        count={postsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onClick={(page) => handlePaginationClick(page)}
      />
    </>
  );
}

export default GlobalFeed;
