import { Link } from "gatsby"
import React from "react"

const NavBar = () => {
  return (
    <nav>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/experience">EXPERIENCE</Link>
        <Link to="/projects/">PROJECTS</Link>
        <Link to="/articles/">ARTICLES</Link>
        <Link to="/contacts/">CONTACT</Link>
      </div>
    </nav>
  )
}

export default NavBar
