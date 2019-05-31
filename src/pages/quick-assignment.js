import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuickAssigmentPage = () => (
  <Layout>
    <SEO title="Quick Assignment" />
    <h1>Quick Rappitendero assignment</h1>
    <h2>
      2. In Rappi, when we need to assign a delivery person (rappitendero) to an
      order, we look for someone nearby and we offer them the order, one
      delivery person at a time. They see the distance and the price and have 30
      seconds to take a yes/no decision to take the order or not.
    </h2>
    <p>
      You have been assigned the KPI of making sure 99% of orders have a
      delivery person assigned within the first 5 minutes of search (current
      level 85%)
    </p>

    <h3>
      How would you determine what technology would most help improve this KPI?
    </h3>
    <h4>Strategic Considerations</h4>
    <p>
      There are many way to reduce the time to assing a delivery person to an
      order. Most of them goes through strategic domains that need to be
      considered. Some decisions are required to be made:
    </p>

    <ol>
      <li>
        At which point can we offer bonuses to stimulate the deliver person
        accept further orders?
      </li>
      <li>
        At which point can we charge more from the end customer based on the
        distance without stop being competitive?
      </li>
      <li>
        Can we punish deliver people who rejects too many of further orders?
      </li>
    </ol>

    <p>
      There should be more concerns, and ideintifying them is a great
      opportunities for improvement. We could create a gamification process to
      deliver people and give points based on desired behavior. This is one
      example that could be applied to this KPI. It is important to find
      motivation opportunities.
    </p>

    <h4>Technology Opportunities</h4>
    <p>
      Besides the business strategy for pricing and engagement programs, we can
      also use techonology as a tool. Defining metrics is one way to learn about
      how we can improve the assignment. There are others.
    </p>

    <p>
      One example is defining bonus zones in a map, indicating to the deliver
      person where they are required most. By implementing a reasonable
      algorithm we could direct the right amount of rappitenderos to strategic
      points in the map. This algorithm could be improved with a{" "}
      <Link to="/concepts/">deep learning</Link> process, that learns every day
      from the demands and find out mismatchs in the distribution.
    </p>

    <h3>
      Let’s assume that an important project to help improve this KPI is
      improving the geographic distribution of delivery people across the city.
      Making the assumptions necessary, explain what exact features you would
      develop and why. Please detail how you would manage the necessary
      development and implementation efforts.
    </h3>

    <h4>Features I would develop</h4>
    <p>Considering the examples I gave above, I would develop 4 features:</p>

    <h5>
      1. Pricing per region, allowing to charge more from customers in scarse
      areas
    </h5>
    <p>
      Assuming that some areas have less demand and consequently less
      rappitenderos, when a customer order from that area we could pay more to
      the deliver person to pick that order. This needs to be a balanced price
      to be enough for them and requires a big set of experimentation to be made
      in order to find the best system.
    </p>

    <h5>
      2. Create a gamification program to the rappitenderos who accept further
      orders
    </h5>
    <p>
      This gamification could be triggered from other actions, but one of them,
      and maybe the most important, could be their availability to work on more
      scarse areas. This game could result in several benefits, like priority
      when the demand is low, bonuses, etc.
    </p>

    <h5>
      3. Show a map with the bonuses areas, allowing rappitenderos to position
      closer to them
    </h5>

    <p>
      Visualy letting people know where they are most needed could help to
      increase the geographic distribution of rappitenderos. There could also be
      some sort of communication to let them know what's the demand on some
      specific area, what kind of orders they are getting there.
    </p>

    <h5>4. Improve the features above based on a deep learning machine</h5>
    <p>
      The features listed above require some intelligence to be prepared before
      it operates. We could use plain old statistics to understand it. So could
      machines. By using a deep learning process with supervisioned learning
      process, we could identify scarsity patterns and prevent them from
      happening before, by adding a dinamic bonus based on what the algorithm
      learned.
    </p>

    <h4>Managing the effort</h4>
    <p>
      Again, the team is key to the success. There features are not too simple
      and will required lot of experimentation to be settled. Both technology
      and business teams need to work together in order to come out with
      something that causes the desired impact.
    </p>

    <p>
      Some of these features might require technical experimentation too.
      Mathematical models may be required and if so, they take some time to be
      refined. The same happens to the deep learning machines. Also the
      coordination with the relationship channels for both the end customer and
      the rappitendero will help to deal with questions.
    </p>

    <p>
      In terms of delivery, I would create a roadmap composed by business driven
      milestones. Working with incremental versions allows us to deliver fast
      and to collect feedback earlier. Using <Link to="/concepts/">Kanban</Link>{" "}
      or an <Link to="/concepts/">agile method</Link> helps to keep things more
      sustainable and organized.
    </p>
  </Layout>
)

export default QuickAssigmentPage
