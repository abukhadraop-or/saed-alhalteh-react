import React from 'react';
import PropTypes from 'prop-types';
import { PaginationList, PaginationLink } from './pagination.styles';

/**
 * Component that displays the pages number based on the number of available posts.
 *
 * @param {Array} posts        Array of objects, which contains the posts.
 * @param {Number} pageSize    Maximum number of posts that are allowed per page.
 * @param {function} onClick   functions to set the range of posts to be displayed based on the current page.
 * @param {Number} CurrentPage current page.
 *
 * @returns {JSX.Element} Pagination
 */

function Pagination({ posts, pageSize, onClick, currentPage }) {
  const itemCount = posts.length;
  let pagesCount = Math.floor(itemCount / pageSize) + 1;
  if (itemCount % pageSize === 0) pagesCount -= 1;
  if (pagesCount === 1) return null;
  const pagesArray = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pagesArray.push(i);
  }
  return (
    <div>
      <PaginationList currentPage={currentPage}>
        {pagesArray.map((page) => (
          <PaginationLink key={page} onClick={() => onClick(page)}>
            {page}
          </PaginationLink>
        ))}
      </PaginationList>
    </div>
  );
}
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
export default Pagination;
