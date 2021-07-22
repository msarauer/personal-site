import { Link } from "gatsby"
import React from "react"

const NavBar = () => {
  return (
    <nav>
      <div className="links">
        <Link activeClassName="active" to="/">
          HOME
        </Link>
        {/* <Link activeClassName="active" to="/experience">
          EXPERIENCE
        </Link> */}
        <Link activeClassName="active" to="/projects">
          PROJECTS
        </Link>
        <Link activeClassName="active" to="/articles/">
          ARTICLES
        </Link>
        <Link activeClassName="active" to="/about/">
          ABOUT
        </Link>
        {/* <Link activeClassName="active" to="/contacts/">
          CONTACT
        </Link> */}
      </div>
    </nav>
  )
}

export default NavBar
