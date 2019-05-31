import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import pmdomains from "../images/what-is-product-management.png"

const ConceptsPage = () => (
  <Layout>
    <SEO title="Concepts" />
    <h1>Product Management Concepts</h1>
    <p>
      Product management is a complex discipline. It envolves few different
      domains.
      <a
        target="_blank"
        href="https://www.prodpad.com/resources/guides/product-management-process/"
      >
        <img src={pmdomains} />
      </a>
    </p>

    <h4>Customer</h4>
    <p>
      The center of products must be the customer. They are the main reason why
      a product exists. A concept that grows more and more every day is the{" "}
      <a
        target="_blank"
        href="https://hbr.org/2007/02/understanding-customer-experience"
      >
        customer experience management
      </a>
      .
    </p>
    <h4>Technology</h4>
    <p>
      Digital product are built using digital technology. Software. It is
      important that a product manager knows its way around the software
      development trends, new technologies and project management.
    </p>
    <h4>Business</h4>
    <p>
      While products are driven by the customer and built with technology, they
      support a business. The Product Manager is required to understand how to
      navigate business models, create new value propositions, understand the
      economics of the product.
    </p>

    <h2>Terms</h2>
    <p>
      <a
        target="_blank"
        href="https://en.wikipedia.org/wiki/Agile_software_development"
      >
        Agile Methods
      </a>
    </p>
    <p>
      <a
        target="_blank"
        href="https://www.strategyzer.com/canvas/business-model-canvas"
      >
        Business Model Canvas
      </a>
    </p>
    <p>
      <a target="_blank" href="https://en.wikipedia.org/wiki/Deep_learning">
        Deep Learning
      </a>
    </p>
    <p>
      <a target="_blank" href="https://leankanban.com/project/what-is-km/">
        Kanban
      </a>
    </p>
    <p>
      <a target="_blank" href="https://en.wikipedia.org/wiki/OKR">
        Objectives and Key Results
      </a>
    </p>
    <p>
      <a
        target="_blank"
        href="https://trydesignlab.com/blog/what-is-service-design/"
      >
        Service Design
      </a>
    </p>
    <p>
      <a target="_blank" href="https://en.wikipedia.org/wiki/SMART_criteria">
        SMART -> Specific, Measurable, Assignable, Realistic, Time-bound
      </a>
    </p>
    <p>
      <a
        target="_blank"
        href="https://www.strategyzer.com/canvas/value-proposition-canvas"
      >
        Value Proposition
      </a>
    </p>
  </Layout>
)

export default ConceptsPage
