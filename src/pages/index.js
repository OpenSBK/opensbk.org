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
    <p>OpenSBK is an effort to build out a series of knowledge collections based on job roles.  The pieces of this project are:</p>
    <p><ul>
      <li>Job Roles</li>
      <li>Job Levels</li>
      <li>Security Topics</li>
    </ul>
    </p>
    <h3>Security Topics</h3>
    <p>Each of the collections is a list of knowledge topics specific to the job role.   These knowledge topics guide learners, employers, and training providers on the information the person should know.</p>
    <h3>Job Roles</h3>
    <p>Job roles are the various positions that are included in the generic <i>infosec job</i>.  OpenSBK is using the NIST NICE framework to outline these positions.  We are also planning on submitting information back to the NICE Cybersecurity Workforce framework to help improve it.</p>
    <h3>Job Levels</h3>
    <p>Currently OpenSBK divides the job roles into levels.   This is is two parts.</p>
    <p><ul>
    <li>Role Difficuly</li>
    <li>Knowledge Level</li>  
    </ul></p>
    <p>Hang in there, we are just getting started!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
