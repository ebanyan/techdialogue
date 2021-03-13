import React from "react"
import { ArenguForm } from "gatsby-plugin-arengu-forms"
import { Link } from "gatsby"

import Layout from "../layouts/index.js"


export default function Contact({ location }) {
    return (
        <Layout location={location}>
            <p>
                About Tech Dialogue:
                Summary
            </p>


            <div>
                <ArenguForm id="161521760729681752" />
            </div>
        </Layout>
    )
}
