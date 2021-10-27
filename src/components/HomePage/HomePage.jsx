import Pagination from 'components/Pagination/Pagination';
import Posts from 'components/Posts/Posts';
import Tags from 'components/Tags/Tags';
import React, { useEffect, useState } from 'react';
import fakeService from 'services/fake-posts-service';
import {
  BannerContainer,
  BannerDescription,
  BannerTitle,
  NavItem,
  NavItemsContainer,
  NavLink,
  PostsDiv,
  TagsAndPostsContainer,
} from './home-page.styles';

/**
 * @type {number} Maximum number of posts per page.
 */
const pageSize = 5;

/**
 * The home page of the application.
 *
 * @return {JSX.Element} HomePage component.
 */
function HomePage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);
  const [postsCount, setPostsCount] = useState(0);

  useEffect(() => {
    const data = fakeService.getCurrentPagePosts(currentPage, pageSize, selectedTags);
    setPosts(data.posts);
    setPostsCount(data.count);
  }, [currentPage, selectedTags]);

  /**
   * Handle clicking on a tag.
   *
   * @param {string} tag Clicked tag.
   */
  const handleTagClick = (tag) => {
    const tagsArray = selectedTags;

    if (tagsArray.indexOf(tag) !== -1) {
      tagsArray.splice(tagsArray.indexOf(tag), 1);
    } else {
      tagsArray.push(tag);
    }

    setSelectedTags([...tagsArray]);
    setCurrentPage(1);
  };

  return (
    <>
      <BannerContainer>
        <BannerTitle> Conduit </BannerTitle>
        <BannerDescription> A place to share your knowledge </BannerDescription>
      </BannerContainer>
      <NavItemsContainer>
        <NavItem>
          <NavLink to="/"> Global Feed</NavLink>
        </NavItem>
      </NavItemsContainer>
      <TagsAndPostsContainer>
        <Tags onClick={(tag) => handleTagClick(tag)} selectedTags={selectedTags} />
        <PostsDiv>
          <Posts posts={posts} />
        </PostsDiv>
      </TagsAndPostsContainer>
      <Pagination
        count={postsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onClick={(page) => setCurrentPage(page)}
      />
    </>
  );
}

export default HomePage;
