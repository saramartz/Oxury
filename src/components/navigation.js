import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`

const NavLink = styled(Link)`
  color: #978150;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  letter-spacing: 0.2rem;

  &:last-of-type {
    margin-right: 0;
  }
  &.showActive {
    border-bottom: 2px solid #978150;
  }
  &:hover {
    color: #49402f;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="showActive">
        Home
      </NavLink>
      <NavLink to={"/about"} activeClassName="showActive">
        About
      </NavLink>
    </Nav>
  )
}

export default Navigation
