/* eslint-disable react/display-name */
import React from 'react';
import { Link } from 'gatsby';

import { StyledContainer } from './styles.js';

export default ({ pageNumber, hasNextPage }) => {
  let prevLink = null;
  if (pageNumber === 1) {
    prevLink = `/blog`;
  } else if (pageNumber > 1) {
    prevLink = `/blog/page/${pageNumber - 1}`;
  }

  let nextLink = null;
  if (hasNextPage) {
    nextLink = `/blog/page/${pageNumber + 1}`;
  }

  return (
    <StyledContainer>
      <ul>
        {prevLink && (
          <li>
            <Link to={prevLink}>&lt;Previous </Link>
          </li>
        )}
        {nextLink && (
          <li>
            <Link to={nextLink}>Next &gt;</Link>
          </li>
        )}
      </ul>
    </StyledContainer>
  );
};
