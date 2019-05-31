import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SocialPage = () => (
  <Layout>
    <SEO title="Social" />
    <h1>User-generated Restaurant Reviews</h1>

    <h2>
      1. Rappi is considering adding social features and/or user-generated
      restaurant reviews to the user application.
    </h2>
    <p>
      Social features is a very generics set of possibilities. It allows the
      imagination flow on several potential features for the app, and each of
      them might require a specific approach.
    </p>

    <h3>How would you determine if this is a good idea or not?</h3>
    <h4>Strategic Objectives</h4>
    <p>
      First thing I use to focus when working with new features is on the
      business strategy. What do we want to achieve in terms of business results
      with this feature? We could work with <Link to="/concepts/">OKRs</Link>{" "}
      extracted from{" "}
      <Link to="/concepts/">Business Model and Value Proposition</Link>{" "}
      exploration.
    </p>
    <p>Some examples for this specific feature could be:</p>
    <ol>
      <li>
        Increase the user perception about the quality of our restaurants;
      </li>
      <li>
        Help us to track what restaurants are not performing well, and why;
      </li>
      <li>
        Increase the conversion rate by reinforcing to the user, thourgh social
        proof, that it is a good decision to buy through Rappi;
      </li>
      <li>
        Provide user generated feedback to the restaurants, so they can improve
        their service.
      </li>
    </ol>
    <p>
      These OKRs sitll need to be improved with metrics and may be more
      specific. If we can't stabilish <Link to="/concepts/">SMART</Link>{" "}
      <Link to="/concepts/">OKRs</Link>, maybe it wouldn't be a good idea to
      work on these features.
    </p>

    <h4>Hypothesis and Experimentation</h4>
    <p>
      Trust your experimentation process, not your vision. It is important to
      recognize that ideas are made of assumptions.{" "}
      <Link to="/concepts/">Our job as Product Managers</Link> is to turn
      assumptions into hypothesis and create cheap and fast experiments to test
      them.
    </p>

    <p>
      I would{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://blog.strategyzer.com/posts/2017/5/2/how-to-test-your-idea-start-with-the-most-critical-hypotheses"
      >
        start with the most critical hypothesis
      </a>{" "}
      and learn from it to create new experiments. Some examples of experiments
      could be:
    </p>
    <ol>
      <li>User interview to confirm their preferences;</li>
      <li>
        Push few handmade reviews to some user and measure the conversion rates;
      </li>
      <li>
        Present some real user opinions about a restaurant to identify how the
        restaurant would react to bad reviews.
      </li>
    </ol>

    <p>
      There is a number of potential expriments to be made even before
      considering working on prototypes for this feature. After the initial
      assumptions are validated and turned into OKRs, we can proceed to build
      prototypes.
    </p>

    <h4>Prototype</h4>
    <p>
      After the strategic validation, we can work on how we would implement the
      feature itself. This is the moment where we can build low fidelity
      wireframes and high fidelity mockups. Test the mechanics of review forms
      with real users in some external tools, e.g. typeform.
    </p>

    <p>
      The objective here is to figure out the best way to present the feature to
      the user and measure the engagement. We could target questions like:
    </p>

    <ol>
      <li>
        Would we offer only one general rating to the whole service or would it
        be split into different ratings?
      </li>
      <li>
        What rewards could we offer to users and how they would leverage the
        reviews?
      </li>
      <li>
        How big the review form could be and what impact in the engagement?
      </li>
    </ol>

    <h4>Metrics</h4>
    <p>
      Even after we validated the strategy and found the best way to present the
      feature to the user, it is important to keep measuring the adption and
      usage. For this we need to place a set of metrics that make sense both
      from the business and user experience perspectives.
    </p>

    <p>Examples of metrics are:</p>
    <ol>
      <li>
        Heat maps to find out where the user spend more time when adding a new
        review;
      </li>
      <li>Dropping points in the review process;</li>
      <li>A/B testing to identify better layouts;</li>
      <li>
        Measure the reviews with the OKRs to make sure we're getting what we
        signed for.
      </li>
    </ol>

    <h3>
      Making the assumptions necessary, explain what features you would develop
      and why. Please detail how you would manage the necessary development and
      implementation efforts.
    </h3>
    <h4>Features I would develop</h4>
    <p>Considering the examples I gave above, I would develop 3 features:</p>

    <h5>1. Simple restaurant rating with 3 start range</h5>
    <p>
      This is a simple version to allow users give a fast rating on the
      restaurant. all the user have to do is to tap into one of the 5 starts.
    </p>

    <h5>2. Allow for advanced review with 3 categories and comments</h5>
    <p>
      After the simple 5 stars rating, we would ask the user to give more
      details about that rating. Show the user to rate 3 individual categories
      and comment:
    </p>

    <ol>
      <li>Rate the dish/food quality;</li>
      <li>Rate the preparation time;</li>
      <li>Rate the packing.</li>
    </ol>

    <p>
      This would allow specific feedback to be give to the restaurant and help
      the user to direct his feedback to the right domains.
    </p>

    <h5>3. Allow user to see the rating in the restaurant listing</h5>
    <p>
      Once we have reviews we can show them to users in the listing. After few
      mockups and experiments I'd say it is time to start an A/B testing to
      figure out where exactly the review will cause bigger impact.
    </p>

    <h4>Managing the effort</h4>
    <p>
      The whole process, from strategic development, to experimentation,
      prototypes and implementation must be a collaborative process. I imagine
      different business owners as steakholders that should contribute to the
      creation. Using <Link to="/concepts/">Service Design</Link> dinamics,
      being transparent in the communication, giving opportunity to people
      expose their ideas and concerns is key to build great features.
    </p>

    <p>
      Balacing the team skills is also very important. Multi-disciplinary teams
      are fundamental to this. As a Product Manager, it is my responsibility to
      make sure the team knows how to deal with every challenge presented.
    </p>

    <p>
      In terms of delivery, I would create a roadmap composed by business driven
      milestones. Working with incremental versions allows us to deliver fast
      and to collect feedback earlier. Using Kanban or an agile methodology
      helps to keep things more sustainable and organized.
    </p>
  </Layout>
)

export default SocialPage
