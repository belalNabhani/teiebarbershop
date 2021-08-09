/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"


const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta name="author" description={siteMetadata.author} />
        <title>{siteMetadata.title}</title>
        <link rel="icon" href="../assets/favicon.png" type="image/x-icon"/>
      </Helmet>
      {children}
  </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
