import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index.js"
import { InlineWidget } from "react-calendly"

export default function Schedule({ location }) {
    return (
        <Layout location={location}>
            <div>
                Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.
                Add as much detail as you can before the meeting so the discussion can be productive.
                <InlineWidget
                    color="#48a8c5"
                    text="Schedule with me"
                    textColor="#ffffff"
                    url="https://calendly.com/techdialogue"
                />
            </div>
        </Layout>
    )
}
