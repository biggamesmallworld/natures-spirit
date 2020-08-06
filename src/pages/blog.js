import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map((post, index) => (
        <li key={index} style={{ padding: "20px 0", margin: "auto" }}>
          <Link to={`/post/${post.node.slug}`} style={{ display: "flex", color: "black", textDecoration: "none" }} >
            <div style={{ width: "75%" }}>
              <img src={post.node.featured_media.localFile.url} alt={post.node.featured_media.alt_text} />
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
              <p style={{ margin: 0, color: "grey" }}>
                Written on {post.node.date}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          featured_media {
            localFile {
              url
            }
            alt_text
          }
          date(formatString: "MMMM DD, YYYY")

        }
      }
    }
  }
`
