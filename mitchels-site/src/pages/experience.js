import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/experience.module.scss"

const experience = ({ data }) => {
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

export default experience

export const query = graphql`
  query ExperiencePage {
    jobs: allMarkdownRemark(
      sort: { fields: frontmatter___startDate, order: DESC }
    ) {
      nodes {
        frontmatter {
          company
          endDate(formatString: "MMM YYYY")
          position
          startDate(formatString: "MMM YYYY")
        }
        html
      }
    }
  }
`
