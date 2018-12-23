import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  img {
    margin-bottom: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  a {
    color: ${props => props.theme.colors.white.base};
    margin: 0 0.5rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize>
    <StyledLink to="/">
      <img src={logo} alt="Gatsby Logo" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
