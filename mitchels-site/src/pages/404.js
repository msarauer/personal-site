import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/404.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.message}>
        <h1>404</h1>
        <h3>You seem to be lost.</h3>
      </div>
    </Layout>
  )
}

export default NotFound
