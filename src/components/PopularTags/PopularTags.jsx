import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPopularTags from 'services/fake-tag-lists';
import { TagsContainer, Title, TagsBox, Tag } from './popular-tags.styles';

/**
 * Popular tags section that contains the tags that can be used to filter the posts.
 *
 * @param {Object} props The props object.
 * @param {func} props.onClick Function to handle click events on tags.
 * @param {String[]} props.selectedTags The selected tags.
 *
 * @return {JSX.Element} Popular tags component .
 */
function PopularTags({ onClick, selectedTags }) {
  const [popularTags, setPopularTags] = useState([]);

  /**
   * Get popular tags from API.
   */
  useEffect(() => {
    const result = getPopularTags();
    setPopularTags(result.tags);
  }, []);

  return (
    <TagsContainer>
      <Title> Popular Tags</Title>
      <TagsBox>
        {popularTags.length === 0 ? (
          <b> No Tags are available yet... </b>
        ) : (
          popularTags.map((tag) => (
            <Tag key={tag} onClick={() => onClick(tag)} isClicked={selectedTags.includes(tag)}>
              {tag}
            </Tag>
          ))
        )}
      </TagsBox>
    </TagsContainer>
  );
}
PopularTags.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PopularTags;
