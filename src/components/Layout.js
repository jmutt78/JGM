import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// import Footer from '../components/Footer';
import GlobalStyles from './GlobalStyles';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

// const data = useStaticQuery(graphql`
// query SiteTitleQuery {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `);
