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
        <h1>
          These are my <span> Projects</span>.
        </h1>
        <ul>
          {projects.map(project => {
            return (
              <li>
                <Link to={project.frontmatter.link}>
                  <h3> {project.frontmatter.title}</h3>
                </Link>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default projects

export const query = graphql`
  query ProjectsPage {
    project: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "project" } } }
      sort: { fields: frontmatter___order, order: DESC }
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
