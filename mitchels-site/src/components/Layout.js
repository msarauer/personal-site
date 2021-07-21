import React from "react"
import "../styles/global.scss"
import NavBar from "./NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      <hr />
      <footer>
        <div className="icons">
          <a>
            <FontAwesomeIcon icon={faGithub} className="brandIcon" />
          </a>
          <a>
            <FontAwesomeIcon icon={faLinkedinIn} className="brandIcon" />
          </a>
          <span className="copyright">&copy; 2021 Mitchel Sarauer</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
