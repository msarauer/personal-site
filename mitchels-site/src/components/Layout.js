import React from "react"
import "../styles/global.scss"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        <p>&copy; 2021 Mitchel Sarauer</p>
      </footer>
    </div>
  )
}

export default Layout
