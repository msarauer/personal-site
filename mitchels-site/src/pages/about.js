import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.scss"

const about = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.inner}>
          <h1>
            This is <span> Me</span>.
          </h1>
          <p>
            Residing in <span>Calgary, Alberta</span>, I am in the midst of
            pivoting from a <span>10+ year career</span> in Civil Engineering
            and Project Management into a new career as a Full Stack Developer.
            As a recent graduate of the{" "}
            <span>Lighthouse Labs Web Development Bootcamp</span>, I have
            experience with the following tech stack:
          </p>
          <div className={styles.stack}>
            <ul>
              <h4>Languages</h4>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Ruby</li>
            </ul>
            <ul>
              <h4>Frameworks & Libraries</h4>
              <li>React</li>
              <li>JQuery</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>Rails</li>
              <li>Ajax</li>
              <li>Socket.io</li>
            </ul>
            <ul>
              <h4>Database</h4>
              <li>PostgreSQL</li>
            </ul>
            <ul>
              <h4>Testing Frameworks</h4>
              <li>Mocha/Chai</li>
              <li>Storybook</li>
              <li>Cypress</li>
              <li>Jest</li>
            </ul>
          </div>
          <p>
            I am excited and eager to move to this new stage of my working life
            and look forward to the interesting challenges that lie ahead!
          </p>
          <div className={styles.resume}>
            <p>
              Take a look at my{" "}
              <Link
                className={styles.resumeLink}
                to="https://resume.creddle.io/resume/eb5udh08rh9"
              >
                resume
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default about
