import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import logo from '../images/ns-logo.png'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressMenusMenusItems(name: { eq: "Header Menu" }) {
          items {
            title
            slug
          }
        }
      }
    `}
    render={data => (
      <header style={{ background: `#000`, marginBottom: `1.45rem`, }} >
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <h1 style={{ margin: 0 }}>
            <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
              <img src={logo} alt="logo" />
              Nature's Spirit  Photography
            </Link>
          </h1>
          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            {data.wordpressMenusMenusItems.items.map(item => (
              <li key={item.slug} style={{ margin: `0 10px` }}>
                <Link to={`/${item.slug}`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    )}
  />
)
export default Header