import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import SEO from "../components/seo"

const PostTemplate = ({data}) => (
  <Layout>
    <SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} />
    <h1>{data.wordpressPost.title}</h1>
    <p>
      Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
    </p>
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
  </Layout>
)

export default PostTemplate
export const query = graphql`
    query($id: Int!) {
        wordpressPost(wordpress_id: { eq: $id }) {
            title
            content
            excerpt
            date(formatString: "MMMM DD, YYYY")
            author {
              name
            }
        }
    }
`