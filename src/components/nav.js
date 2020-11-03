import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const Nav = ({ siteTitle }) => (
  <NavContainer>
    {siteTitle}
  </NavContainer>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav


const NavContainer = styled.nav`
  height: 60px;
  background-color: #EAEAEA;
`;