import PropTypes from 'prop-types';
import React from 'react';
import { PaginationButton, PaginationItem, PaginationList } from './pagination.styles';

/**
 * Pagination.
 *
 * @param {Object} props The props object.
 * @param {number} props.count  Posts count.
 * @param {number} props.pageSize Maximum allowed number of posts per page.
 * @param {Function} props.onClick Handles clicks on pagination.
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
        <PaginationItem key={page}>
          <PaginationButton onClick={() => onClick(page)}>{page}</PaginationButton>
        </PaginationItem>
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
