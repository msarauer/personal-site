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
            I am in the midst of pivoting from a 10+ year career in Civil
            Engineering and Project Management into a new career as a Full Stack
            Developer in Calgary, Alberta. As a recent graduate of the
            Lighthouse Labs Web Development Bootcamp, I have expereince with the
            following tech stack:
          </p>
          <dl>
            <dt>Languages</dt>
            <dd>Javascript</dd>
            <dd>HTML</dd>
            <dd>CSS</dd>
            <dd>Ruby</dd>

            <dt>Frameworks & Libraries</dt>
            <dd>React</dd>
            <dd>JQuery</dd>
            <dd>Express</dd>
            <dd>NodeJS</dd>
            <dd>Rails</dd>
            <dd>Ajax</dd>
            <dd>Socket.io</dd>

            <dt>Database</dt>
            <dd>PostgreSQL</dd>

            <dt>Testing Frameworks</dt>
            <dd>Mocha/Chai</dd>
            <dd>Storybook</dd>
            <dd>Cypress</dd>
            <dd>Jest</dd>
          </dl>
          <p>
            I am excited and eager to move to this new stage of my working life
            and look forward to the interesting challenges that lie ahead!
          </p>
          <p>
            Take a look at my <span>resume</span>.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default about
