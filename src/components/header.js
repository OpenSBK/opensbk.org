import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        background: `grey`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 5 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div 
      style={{
        margin:`0 auto`,
        maxWidth: `960`,
        padding: `1.45rem 1.0875rem`,
        background: `white`,
        textAlign: `center`,
        }}>
          <Link
            to="/"
            activeStyle={{ color: "navy" }}
            className='menulink'
          >Home</Link> | 
          <Link
            to="/about"
            activeStyle={{ color: "navy" }}
            className='menulink'
          >About OpenSBK</Link> | 
          <a href="https://github.com/opensbk" class="menulink">GitHub Project</a> | 
          <a href="mailto:info@opensbk.org" class="menulink">Contact OpenSBK</a>
          </div>

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
