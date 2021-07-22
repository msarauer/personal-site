import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/articles.module.scss"

const articles = ({ data }) => {
  const articles = data.articles.nodes

  return (
    <Layout>
      <div className={styles.layout}>
        <h1>
          These are my <span> Articles</span>.
        </h1>
        <ul>
          {articles.map(article => {
            return (
              <li>
                <Link to={article.frontmatter.link}>
                  <h3> {article.frontmatter.title}</h3>
                </Link>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: article.html }}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default articles

export const query = graphql`
  query ArticlesPage {
    articles: allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "article" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          date
          link
          readTime
          title
        }
        html
      }
    }
  }
`
