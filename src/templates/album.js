import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const AlbumTemplate = ({data}) => (
  <Layout>
    <SEO title={data.wordpressWpAlbum.title} description="some description" />
    <h1>{data.wordpressWpAlbum.title}</h1>
    {data.wordpressWpAlbum.acf.images.map((element, index) => (
      <Img key={index} resolutions={element.image.localFile.childImageSharp.resolutions} />
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
              localFile {
                childImageSharp {
                  resolutions(width: 500, height: 500) {
                    src
                    width
                    height
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
`