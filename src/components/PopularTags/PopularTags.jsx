import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPopularTags from 'services/fakeTagLists';
import { TagsContainer, Title, TagsBox, Tag } from './popular-tags.styles';

/**
 * Component showing popular tags.
 * @param {func} onClick function to handle click events on tags;
 * @returns  {JSX.Element}.Popular tags section that contains tags that can be used to filter the posts.
 */

function PopularTags({ onClick }) {
  const [popularTags, setPopularTags] = useState([]);

  useEffect(() => {
    /**
     * get popular tags from API
     */
    function callGetPopularTags() {
      const result = getPopularTags();
      setPopularTags(result.tags);
    }
    callGetPopularTags();
  }, []);

  /**
   * toggles the style of the clicked tag and calls the OnClick function that is
   *  responsible for filtering the posts based on the selected tag.
   *
   * @param {Object} e onClick event
   * @param {string} tag the tag that is clicked
   */
  function handleTagClick(e, tag) {
    e.target.classList.toggle('selected');
    onClick(tag);
  }

  /**
   *  display available tags on the popular tags section.
   *
   *  @returns  {JSX.Element}.the tags that are available.
   */
  function generateTags() {
    if (popularTags.length === 0) {
      return <b> No Tags are available yet... </b>;
    }
    return popularTags.map((tag) => (
      <Tag key={tag} onClick={(e) => handleTagClick(e, tag)} status={false}>
        {tag}
      </Tag>
    ));
  }

  return (
    <TagsContainer>
      <Title> Popular Tags</Title>
      <TagsBox>{generateTags()}</TagsBox>
    </TagsContainer>
  );
}
PopularTags.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default PopularTags;
