import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import SEO from "../components/seo"

const AlbumTemplate = ({data}) => (
  <Layout>
    <SEO title={data.wordpressWpAlbum.title} description="some description" />
    <h1>{data.wordpressWpAlbum.title}</h1>
    <h3>Posted on {data.wordpressWpAlbum.date}</h3>
    {data.wordpressWpAlbum.acf.images.map(element => (
        <img key={element.image.id} src={element.image.link} alt="petersburg" />
    ))}
  </Layout>
)

export default AlbumTemplate
export const query = graphql`
    query($id: Int!) {
      wordpressWpAlbum(wordpress_id: { eq: $id }) {
        title
        date(formatString: "MMMM DD, YYYY")
        acf {
          images {
            image {
              link
              id
            }
          }
        }
      }
    }
`