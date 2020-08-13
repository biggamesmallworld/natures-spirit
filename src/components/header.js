import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import logo from '../images/ns-logo.png'
import signature from '../images/signature.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
      /*<header style={{ background: `#1e1e1e`, marginBottom: `1.45rem`, }} >
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <h3 className='branding' style={{ margin: 0 }}>
            <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
              <img className='header-logo' src={logo} alt="logo" />
              <p>Nature's Spirit <br />Photography</p>
              <div className="clearDiv"></div>
              <img className="signature" src={signature} alt='Jim Nahmens'/>
              <p className="tagline">Explore, Create, Inform, Inspire</p>
            </Link>
          </h3>
          <div className="navbar-collapse collapse">
            <ul className="nav-menu" style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
              <li style={{ margin: `0 10px` }}>
                <Link to={`/albums/`} style={{ color: `white`, textDecoration: `none`,  }} >
                  Albums
                </Link>
              </li>
              <li style={{ margin: `0 10px` }}>
                <Link to={`/blog/`} style={{ color: `white`, textDecoration: `none`,  }} >
                  Blog
                </Link>
              </li>
              {data.wordpressMenusMenusItems.items.map(item => (
                <li key={item.slug} style={{ margin: `0 10px` }}>
                  <Link to={`/${item.slug}`} style={{ color: `white`, textDecoration: `none`, }} >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>*/
      <Navbar expand="md" className="navbar-dark">
        <Navbar.Brand>
          <h4 className='branding' style={{ margin: 0 }}>
            <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
              <img className='header-logo' src={logo} alt="logo" />
              <p>Nature's Spirit <br />Photography</p>
              <div className="clearDiv"></div>
              <img className="signature" src={signature} alt='Jim Nahmens'/>
              <p className="tagline">Explore, Create, Inform, Inspire</p>
            </Link>
          </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <ul className="nav-menu" style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
              <li style={{ margin: `0 10px` }}>
                <Link to={`/albums/`} style={{ color: `white`, textDecoration: `none`,  }} >
                  Albums
                </Link>
              </li>
              <li style={{ margin: `0 10px` }}>
                <Link to={`/blog/`} style={{ color: `white`, textDecoration: `none`,  }} >
                  Blog
                </Link>
              </li>
              {data.wordpressMenusMenusItems.items.map(item => (
                <li key={item.slug} style={{ margin: `0 10px` }}>
                  <Link to={`/${item.slug}`} style={{ color: `white`, textDecoration: `none`, }} >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )}
  />
)
export default Header