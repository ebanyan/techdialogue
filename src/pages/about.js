import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index.js"

export default function About({ location }) {
  return (
    <Layout location={location}>
      <h1>Welcome!!!</h1>
      <p>
        Welcome to my virtual hideout.
      </p>

    </Layout>
  )
}
