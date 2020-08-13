import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageGrid from "../components/ImageGrid"
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="regular-text">Driven by the challenge of capturing extraordinary marine mammal images for 20+ years. 
      Passionate about creating informative designs that inspire.</p>
    <ImageGrid />
  </Layout>
)

export default IndexPage


