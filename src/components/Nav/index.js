import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderModal from './NavModal';
// import Logo from '../../../assets/logo.svg';
import Calendly from '../Calendly';

import { Root, NavFlex, NavLinks, BlogLink } from './styles';

const Nav = ({ siteTitle }) => (
  <nav>
    <Root>
      <NavFlex>
        <Link to='/'>{/* <Logo /> */}</Link>
        <NavLinks>
          <HeaderModal buttonLabel='LETS CHAT'>
            <Calendly />
          </HeaderModal>

          <BlogLink>
            <Link to='/blog'>
              <h3>BLOG</h3>
            </Link>
          </BlogLink>
        </NavLinks>
      </NavFlex>
    </Root>
  </nav>
);

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};

export default Nav;
