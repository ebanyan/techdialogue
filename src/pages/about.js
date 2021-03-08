import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index.js"

const NoStyleLink = (props) => (
    <Link css={{ color: `#48a8c5`, textDecoration: `none` }} {...props} />
)

export default function About({ location }) {
  return (
    <Layout location={location}>
      <p>
          <h2> About Tech Dialogue:</h2>
          <h3> Summary </h3>
          **Tech Dialogue is** a podcast wherein experienced technology
          professionals conduct interviews, give feedback to candidates, share
          their expertise & experience, as well as source talent.
          <br/>
          <br/>
           <h4>Mission</h4>
          **Tech Dialogue mission is** to help companies attract the right
          talent. A platform to enlighten about the company, culture, and the position being
          filled in great detail.
          <br/>
          <br/>
          **Tech Dialogue mission is** to help experienced professionals
          mentor and be an influencer in the long run.
          <br/>
          <br/>
          **Tech Dialogue mission is** to expose candidates to
          experienced professionals whose interviewing styles are so powerful that
          just hearing them regularly could change ones outlook.
          <br/>
          <br/>
          **Tech Dialogue mission is** to show candidates a way to "learn from
          others' experiences". The best way to advance in your profession is to
          learn from a mix of smart people who are willing to share their
          expertise and experiences.
          <br/>
          <br/>
          **Tech Dialogue mission is** to help candidates build the network even if
          one is just starting their profession.
          <br/>
          <br/>
          **Tech Dialogue mission is** to help candidates understand various roles,
          responsibilities, requirements and what companies are looking for in a
          candidate during several dialogues.
          <br/>
          <br/>
          **Tech Dialogue mission is** to make the candidates aware that it is not just
          technology but much more - soft skills, communication skills,
          fostering relationships, and expanding the network.
          <br/>
          <br/>
          **Tech Dialogue mission is** too big for me to achieve alone. If
          what I am describing appeals to you, reach out to me and we will explore
          successful career paths.
          <br/>
          <br/>
          If you believe in the mission, I request you to submit your details in
          the           <NoStyleLink to="/contact/">contact form </NoStyleLink> {"   "}
      </p>

    </Layout>
  )
}
