import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <h1>NOT FOUND</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default NotFoundPage
