import React from 'react';
import PropTypes from 'prop-types';
import { PaginationList, PaginationLink } from './pagination.styles';

/**
 * Component that displays the pages number based on the number of available posts.
 *
 * @param {Object} props The props object.
 * @param {number} props.count Array of objects, which contains the posts.
 * @param {Number} props.pageSize Maximum number of posts that are allowed per page.
 * @param {function} props.onClick Functions to set the current page.
 * @param {Number} props.currentPage The current page.
 *
 * @return {JSX.Element} Pagination component.
 */
function Pagination({ count, pageSize, onClick, currentPage }) {
  let pagesCount = Math.floor(count / pageSize) + 1;
  pagesCount = count % pageSize === 0 ? pagesCount - 1 : pagesCount;

  const pagesArray = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pagesArray.push(i);
  }

  return pagesCount === 1 ? null : (
    <PaginationList currentPage={currentPage}>
      {pagesArray.map((page) => (
        <PaginationLink key={page} onClick={() => onClick(page)}>
          {page}
        </PaginationLink>
      ))}
    </PaginationList>
  );
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};
export default Pagination;
