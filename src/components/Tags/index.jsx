import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getTags from 'services/fake-tag-lists';
import { Tag, TagsBox, TagsContainer, Title } from './tags.styles';

/**
 * Tags section.
 *
 * @param {Object} props The props object.
 * @param {Function} props.onClick Handles click events on tags.
 * @param {String[]} props.selectedTags The selected tags.
 *
 * @return {JSX.Element} Tags component.
 */
function Tags({ onClick, selectedTags }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const result = getTags();
    setTags(result.tags);
  }, []);

  return (
    <TagsContainer>
      <Title> Popular Tags</Title>
      <TagsBox>
        {tags.length === 0 ? (
          <b> No Tags are available yet... </b>
        ) : (
          tags.map((tag) => (
            <Tag key={tag} onClick={() => onClick(tag)} isClicked={selectedTags.includes(tag)}>
              {tag}
            </Tag>
          ))
        )}
      </TagsBox>
    </TagsContainer>
  );
}

Tags.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
