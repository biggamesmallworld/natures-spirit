/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/post.js")
  const PageTemplate = path.resolve("./src/templates/page.js")
  const AlbumTemplate = path.resolve("./src/templates/album.js")
  
  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpAlbum {
        edges {
          node {
            wordpress_id
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const Albums = result.data.allWordpressWpAlbum.edges
    Albums.forEach(album => {
      createPage({
        path: `/albums/${album.node.slug}`,
        component: AlbumTemplate,
        context: {
          id: album.node.wordpress_id,
        },
      })
    })

    const BlogPosts = result.data.allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })

      const Pages = result.data.allWordpressPage.edges
      Pages.forEach(page => {
        createPage({
          path: `/${page.node.slug}`,
          component: PageTemplate,
          context: {
            id: page.node.wordpress_id,
          },
        })
      })
    })
  })
}