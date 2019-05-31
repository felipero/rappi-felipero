import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import eu from "../images/eu.jpeg"
import cvIcon from "../images/cv-icon.png"
import linkedin from "../images/linkedin.png"
import "./about-me.css"

const AboutMePage = () => (
  <Layout>
    <SEO title="About Me" />
    <header className="about-me">
      <img src={eu} alt="Felipe Rodrigues" />
      <div>
        <h1>Felipe Rodrigues</h1>
        <p>Bunsiness Strategy Specialist | Product Manager</p>
        <p>
          <a href="mailto:felipero@gmail.com">felipero@gmail.com</a>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://linkedin.com/in/felipero"
        >
          <img src={linkedin} alt="Felipe linkedin profile" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="/cv.pdf">
          <img
            src={cvIcon}
            title="Felipe Rodrigues resume"
            alt="Felipe linkedin resume"
          />
        </a>
      </div>
    </header>

    <p>
      Hi, I'm a very experienced product manager, working with product
      development for more than 10 years already.
    </p>
    <p>
      In my career I've been executive for few different companies. The first
      was my own company, where I built more than 30 MVPs for different
      stratups. Not alone, of course, but with a team I built from scratch. In
      fact, I've built great teams in more than one opportunity.
    </p>

    <p>
      One of my coolest projects was{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://strategyzer.com"
      >
        strategyzer.com
      </a>
      . There I worked directly with Alex Osterwalder and Alan Smith and learned
      a lot about how to work with Value Proposiotions and Business Models. I
      apply those techniques to every project I work on.
    </p>

    <p>
      I also have a big technical experience in software development. I never
      left coding to be true. Writing software is one of my passions and I'll
      never stop doing that. I know a bit about microservices and domaind driven
      design, which gives me a great base for different software architectures.
    </p>

    <section className="recommendations">
      <h3>Reccomendations</h3>

      <p>
        I had the privilegie of working with Felipe in one of our innovation
        projects. He supported us in the business strategy development, being
        active in the comprehension of our business models and product features.
        Felipe brought to our attention importante literature like Pitch
        Anything and Mnoteizing Innovation, which have been very useful to
        structure our model and pitch. The work he’s done allowed us to tune and
        tighten our relationship with investors and partners.
        <span>
          Wladimir Rezende – Marketing and Business strategy Executive at UMC
          Field
        </span>
      </p>

      <p>
        I worked with Felipe during roughly five months on an education project
        and had the opportunity to receive feedback from work he has done prior
        to that through some of his old clients who were on the receiving end of
        the software solutions he created. He’s very knowledgeable of the key
        the- ories behind innovation and exponential organizations and is very
        aware of what’s new in the space. I learned a lot from him. Also, my
        exposure to his former clients also demonstrated that the solutions he
        created were the foundation to several successful start-ups.
        <span>Jaime Szulc – Partner at Pivot Factory</span>
      </p>

      <p>
        Felipe and the entire team at Crafters have been an irreplaceable piece
        of the development of Monster Roster. Not only are they the most skilled
        and talented development team I have had the pleasure of working with,
        but their communication and reliability is top-notch as well. Crafters
        has helped me turn my vision of Monster Roster into reality. I couldn't
        recommend the team more.
        <span>Dylan Elder – MonsterRoster.com</span>
      </p>

      <p>
        Felipe’s honest and constructive approach draws people in. Paired with
        his knowledge of best practices, he is able to help a team identify weak
        processes. From there, shares best practices and benchmarks before
        facilitating the team in the creation of their own solutions. What he
        won’t do, is let teams go crazy making radical, risky, or arbitrary
        changes. He helped us by consistently providing timely, critical
        feedback that kept us from falling for “shiny new things” and instead
        direct us towards sustainable, continuous improvement of our development
        and product management.
        <span>
          Alan Smith – Strategyzer.com (Author of the Business Model Generation)
        </span>
      </p>

      <p>
        Felipe is a great thought leader of software engineer community and a
        true entrepreneur. He's one of the most brilliant developer and software
        architect that I had worked. I strongly recommend Felipe as a solution
        maker and great troubleshooter.
        <span>Manoel Pimentel – Agile Coach at Elabor8</span>
      </p>

      <p>
        Felipe is a specialist in agile culture, expert in its methods and
        values. He knows and explores Technologies and i salso a great coach.
        <span>
          Rafael Barbosa Camargo – Digital Specialist at McKinsey Digital Labs
        </span>
      </p>
    </section>
  </Layout>
)

export default AboutMePage
