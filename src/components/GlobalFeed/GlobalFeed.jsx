import React, { useEffect, useState } from 'react';
import PopularTags from 'components/PopularTags/PopularTags';
import GlobalFeedPosts from 'components/GlobalFeedPosts/GlobalFeedPosts';
import Pagination from 'components/Pagination/Pagination';
import { getPosts } from 'services/fakePostsService';
import {
  NavLink,
  NavItem,
  MainContainer,
  TagsAndPostsContainer,
  PostsDiv,
} from './global-feed.styles';

/**
 * Component showing global feed navigation-bar and posts.
 *
 * @returns  {JSX.Element}.Global feed section that contains nav bar and posts.
 */
function GlobalFeed() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [selectedTags, setSelectedTags] = useState([]);

  /**
   * Filter the posts to be displayed according to the selected tags.
   *
   * @param {Array} result Array of objects, which are the posts to be filtered.
   * @returns {Array} posts after being filtered.
   */
  function filterPostsBasedOnTags(result) {
    if (selectedTags.length === 0) return result;

    const filteredResult = [];
    selectedTags.map((tag) =>
      result.map((post) =>
        post.tagList.includes(tag) && !filteredResult.includes(post)
          ? filteredResult.push(post)
          : null
      )
    );
    return filteredResult;
  }

  /**
   * sets the range of the filtered posts to be displayed based on te current selected page.
   *
   * @param {Number} page current page.
   */
  function handlePaginationClick(page) {
    const filteredPostsClone = posts.slice((page - 1) * pageSize, page * pageSize);
    setFilteredPosts(filteredPostsClone);
    setCurrentPage(page);
  }

  /**
   *  calls a function to get the posts after the page is rendered the first time,
   *  re-gets them each time the selected tags are changed.
   */
  useEffect(() => {
    /**
     * gets the posts to be displayed on the page from the end point.
     */
    function getFeedPosts() {
      let result = getPosts();
      result = filterPostsBasedOnTags(result);
      setPosts(result);
      if (result.length > pageSize) {
        setFilteredPosts(result.slice(0, pageSize));
      } else {
        setFilteredPosts(result);
      }
    }
    getFeedPosts();
    setCurrentPage(1);
  }, [selectedTags]);

  /**
   * Toggles tags to be used for filtering the posts from the tags array.
   *
   *
   * @param {String} tag the tag to be used to filter the posts.
   */
  function handleTagClick(tag) {
    const tagsArray = selectedTags;
    if (tagsArray.indexOf(tag) !== -1) {
      tagsArray.splice(tagsArray.indexOf(tag), 1);
    } else {
      tagsArray.push(tag);
    }
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
          <GlobalFeedPosts posts={filteredPosts || posts} />
        </PostsDiv>
      </TagsAndPostsContainer>
      <Pagination
        posts={posts}
        pageSize={pageSize}
        currentPage={currentPage}
        onClick={(page) => handlePaginationClick(page)}
      />
    </MainContainer>
  );
}

export default GlobalFeed;
