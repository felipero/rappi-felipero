import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/rappi-logo-bg.png"

const Header = ({ siteTitle }) => (
  <header id="mainHeader">
    <div>
      <img src={logo} />

      <nav>
        <li>
          <Link to="/">Answers</Link>
        </li>
        <li>
          <Link to="/concepts">Concepts</Link>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
