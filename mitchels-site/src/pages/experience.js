import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/experience.module.scss"

const Experience = ({ data }) => {
  const jobs = data.jobs.nodes

  return (
    <Layout>
      <div className={styles.layout}>
        {jobs.map(job => {
          return (
            <div>
              <h2>{job.frontmatter.company}</h2>
              <h3>{job.frontmatter.position}</h3>
              <h4>
                {job.frontmatter.startDate} - {job.frontmatter.endDate}
              </h4>
              <div dangerouslySetInnerHTML={{ __html: job.html }} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Experience

export const query = graphql`
  query ExperiencePage {
    jobs: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "experience" } } }
      sort: { fields: frontmatter___startDate, order: DESC }
    ) {
      nodes {
        frontmatter {
          startDate(formatString: "MMM YYYY")
          position
          endDate(formatString: "MMM YYYY")
          company
        }
        html
      }
    }
  }
`
