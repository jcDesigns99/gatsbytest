import React, { Component } from "react"
import Link from 'gatsby-link'
import PropTypes from "prop-types"
import ClockIcon from "react-icons/lib/fa/clock-o"
import TagIcon from "react-icons/lib/fa/tag"
import OpenIcon from "react-icons/lib/fa/folder-open"
import PostIcons from "../components/PostIcons"

import { rhythm } from "../utils/typography"

class IndexPage extends Component {
  render() {
    const data = this.props.data
    return (
      <div>
         <h1>Posts</h1>
            {data.allWordpressPost.edges.map(({ node }) => (
              <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
                <Link to={node.slug} css={{ textDecoration: `none` }}>
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <PostIcons node={node} />
              </div>
            ))}
        <Link to="/about/">Go to the About page</Link>
      </div>
    )
  }
}

export default IndexPage

// Set here the ID of the home page.
export const pageQuery = graphql`
  query indexPageQuery {
    allWordpressPage {
      edges {
        node {
          id
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          slug
          ...PostIcons
        }
      }
    }
  }
`