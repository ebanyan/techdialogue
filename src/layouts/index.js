import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import typography from "../utils/typography"
const rhythm = typography.rhythm
const scale = typography.scale

const NoStyleLink = props => (
  <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
)

class Wrapper extends React.Component {
  render() {
    return (
      <div
        css={{
          minHeight: `100vh`,
          borderTop: `${rhythm(3 / 4)} solid #48a8c5`,
          "@media (min-width: 420px)": {
            border: `${rhythm(3 / 4)} solid #48a8c5`,
          },
        }}
      >
        <div css={{ minHeight: rhythm(1) }}>
          <div
            css={{
              float: `left`,
              // color: `#48c5c1`,
              marginTop: rhythm(3 / 4),
              marginLeft: rhythm(3 / 4),
              fontSize: scale(2 / 5).fontSize,
              lineHeight: scale(2 / 5).lineHeight,
            }}
          >
            <NoStyleLink to="/">TechDialogue</NoStyleLink>
          </div>
          <div
            css={{
              float: `right`,
              // color: `#c5484d`,
              marginTop: rhythm(3 / 4),
              marginRight: rhythm(3 / 4),
              fontSize: scale(2 / 5).fontSize,
              lineHeight: scale(2 / 5).lineHeight,
            }}
          >
              <NoStyleLink to="/about/">about</NoStyleLink>{"        "}
              <NoStyleLink to="/contact/">contact</NoStyleLink> {"        "}
              <NoStyleLink to="/contactNetlify/">contactN</NoStyleLink> {"        "}

              <NoStyleLink to="/episodes/">episodes</NoStyleLink>
          </div>
        </div>
        <div
          css={{
            padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
            "@media (min-width: 420px)": {
              padding: `${rhythm(3)} ${rhythm(3 / 4)}`,
            },
            maxWidth: rhythm(22),
            margin: `0 auto`,
          }}
        >
          <Helmet defaultTitle="TechDialogue" titleTemplate="TechDialogue | %s" />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Wrapper
