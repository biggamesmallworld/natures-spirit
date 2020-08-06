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
      <Img key={index} fluid={element.image.localFile.childImageSharp.fluid} />
    ))}
    <div className="clearDiv"></div>
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
                  fluid(maxWidth: 400) {
                    srcSet
                    src
                    sizes
                    aspectRatio
                    presentationWidth
                    srcSetWebp
                    srcWebp
                    tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
`