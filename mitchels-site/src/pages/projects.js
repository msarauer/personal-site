import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/projects.module.scss"

const projects = ({ data }) => {
  const projects = data.project.nodes
  console.log(projects)
  return (
    <Layout>
      <div className={styles.layout}>
        {projects.map(project => {
          return (
            <div>
              <Link to={project.frontmatter.link}>
                <h3>{project.frontmatter.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default projects

export const query = graphql`
  query ProjectsPage {
    project: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "project" } } }
    ) {
      nodes {
        frontmatter {
          title
          link
        }
        html
        id
      }
    }
  }
`
