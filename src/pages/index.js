import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Answers" />
    <h1>Product Manager</h1>
    <p>
      Hi, I'm Felipero and I created this page to host my answers to the Senior
      Product Manager assigment. In the top menu you can find the answers and
      some of the concepts I use in my day-to-day process.
    </p>
    <p>
      Below you can choose and find out the answers I created for each question:
    </p>
    <div class="choice">
      <div>
        <Link to="/social">Restaurant Reviews</Link>
      </div>
      <div>
        <Link to="/quick-assignment">Faster assigment to order</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
