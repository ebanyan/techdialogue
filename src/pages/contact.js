import React from "react"
import { ArenguForm } from "gatsby-plugin-arengu-forms"
import { Link } from "gatsby"

import Layout from "../layouts/index.js"


export default function Contact({ location }) {
    return (
        <Layout location={location}>
            <p>
                <h2> About Tech Dialogue:</h2>
                <h3> Summary </h3>
            </p>

            <div>
                <ArenguForm
                    id="161521760729681752"

                />
            </div>
        </Layout>
    )
}
