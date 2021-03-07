import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index.js"

export default function Contact({ location }) {
  return (
      <Layout location={location}>
      <form method="post" action="https://formspree.io/f/mrgonzra">
          <p>
              Thank you for your interest in joining "The Tech Dialogue" mission.
              Please provide as much details as you can in the following form and we
              will do the best to coordinate with you for the upcoming podcast(s).
              For ex., let us know if you would like to take the interview, give the interview, position you are trying to fill,etc.,.

              <br/>
          </p>
          <label>

              <textarea name="message"></textarea>
          </label>
          <br/>

          <label>
              Email:  <br/>
              <input type="email" name="_replyto" />
          </label>

          <br/>
          <br/>
          <br/>
          <button type="submit">Submit</button>

      </form>
      </Layout>
  )
}
