import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Navigation from "./navigation"
import Logo from "../images/logo2.png"

const NavbarBrand = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`
const Header = () => {
  return (
    <header
      css={css`
        background-color: #151414f3;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 2000px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <NavbarBrand to="/">
          <img
            src={Logo}
            width="80px"
            alt="logo"
            style={{
              borderRadius: "50%",
              display: "block",
              margin: "0 auto",
            }}
          />
        </NavbarBrand>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
