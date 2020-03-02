import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About OpenSBK" />
    <h1>About OpenSBK</h1>
    <p>OpenSBK is an organization focused on providing a body of knowledge to improve the information security field.  OpenSBK is working toward non-profit status.</p>
    <p>
        <div style={{ maxWidth: `300px`, float: `center`, align: `center`}}>
            <div class="left">Email:</div><div class="right">info@opensbk.org</div><br />
            <div class="left">Twitter:</div><div class="right">@opensbk</div><br />
            <div class="left">Github:</div><div class="right">https://github.com/opensbk</div><br />
        </div>
    </p>
    
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default AboutPage
