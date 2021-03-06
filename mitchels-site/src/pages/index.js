import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.scss"

const Home = () => {
  return (
    <Layout>
      <div className={styles.welcome}>
        <div className={styles.inner}>
          <h1>
            Hi, I'm <span> Mitchel Sarauer</span>.
          </h1>
          <h3>I'm a Full Stack Web Developer.</h3>
          <h3>Welcome to my site.</h3>
          <h3>
            <Link className={styles.aboutLink} to="/about/">
              Learn more
            </Link>{" "}
            about me.
          </h3>
        </div>
      </div>
    </Layout>
  )
}

export default Home
