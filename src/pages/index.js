import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Mission Statement</h1>
    <p>The mission of the Open Security Body of Knowledge project is to guide and improve training and mentoring of information security professionals by curating an open repository of role-oriented knowledge.</p>
    <p>Hang in there, we are just getting started!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
