import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.scss"

const Home = () => {
  return (
    <Layout>
      <div className={styles.welcome}>
        <h1>
          Hi, I'm <span> Mitchel Sarauer</span>.
        </h1>
        <h3>Welcome to my site.</h3>
      </div>
    </Layout>
  )
}

export default Home
