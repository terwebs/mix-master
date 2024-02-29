import { NavLink } from "react-router-dom"
import styled from "styled-components"
import Wrapper from "../assets/wrappers/Navbar"

export default function Navbar() {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

//this selects the nav element and add styles in js
//this work as a wrapper component
// const WrapperNav = styled.nav`
//   background-color: gray;
// `
