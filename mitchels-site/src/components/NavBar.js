import { Link } from "gatsby"
import React from "react"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">MITCHEL SARAUER</Link>
      <div className="links">
        <Link to="/">HOME</Link>
        <Link to="/projects/">PROJECTS</Link>
        <Link to="/articles/">ARTICLES</Link>
      </div>
      <Link to="/contacts/" className="contact">
        CONTACT
      </Link>
    </nav>
  )
}

export default NavBar
