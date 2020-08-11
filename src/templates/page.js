import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.excerpt}
    />
    <h1>{data.wordpressPage.title}</h1>
    <div className="regular-text" dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
  </Layout>
)
export default PageTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`