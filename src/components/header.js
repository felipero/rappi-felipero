import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/rappi-logo-bg.png"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  toogleMenu = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen }
    })
  }

  render() {
    return (
      <header id="mainHeader">
        <Link to="/">
          <img src={logo} alt="Rappi logo" />
        </Link>
        <div className={this.state.menuOpen ? "menu-open" : ""}>
          <div className="menu-icon" onClick={this.toogleMenu}>
            <div />
            <div />
            <div />
          </div>
          <nav className="menu">
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
