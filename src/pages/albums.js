import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const AlbumPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressWpAlbum.edges.map((post, index) => (
        <li key={index} style={{ padding: "20px 0" }}>
          <Link to={`/albums/${post.node.slug}`} style={{ display: "flex", color: "black", textDecoration: "none" }} >
            <div style={{ width: "75%" }}>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
              <p style={{ margin: 0, color: "grey" }}>
                Posted on {post.node.date}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default AlbumPage

export const query = graphql`
  query {
    allWordpressWpAlbum {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
