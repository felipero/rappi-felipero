import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMePage = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Felipe Rodrigues</h1>
    <p>
      Hi, I'm a very experienced product manager, working with product
      development for more than 10 years already.
    </p>
    <p>
      In my career I've been executive for few different companies. The first
      was my own company, where I built more than 30 MVPs for different
      stratups. Not alone, of course, but with a team I built from scratch. In
      fact, I've built great teams more than twice.
    </p>

    <p>
      One of my coolest projects was with{" "}
      <a href="http://strategyzer.com">strategyzer.com</a>. There I worked
      directly with Alex Osterwalder and Alan Smith. I learned a lot about how
      to work with Value Proposiotions and Business Models.
    </p>

    <p>
      I also hold lots of technical experience in software development. I never
      left coding. Writing software is one of my passions and I'll never stop
      doing that. I know a bit about microservices and domaind driven design,
      which gives me a great base for different software architectures.
    </p>

    <p>
      You can find me on LinkedIn. I'm very proud of the reccomendations I
      received there. If you may take a time to read thatm it worth the time.{" "}
      <a href="http://linkedin.com/in/felipero">My LinkedIn profile</a>.
    </p>
    <p>
      Feel free to ping me on{" "}
      <a href="mailto:felipero@gmail.com">felipero@gmail.com</a>.
    </p>
  </Layout>
)

export default AboutMePage
