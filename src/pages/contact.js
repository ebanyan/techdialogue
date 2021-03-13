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
                <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <textarea name="message"></textarea>
                </form>
            </div>
        </Layout>
    )
}
