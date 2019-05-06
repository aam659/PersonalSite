import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteLogoWrapper = styled.div`
  width: 50px;
  padding: 5px;
  margin: 5px;
`

const SiteLogoImage = styled.img`
  max-width: 100%;
`

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                id
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <SiteLogoWrapper>
        <SiteLogoImage
          src={props.allWordpressWpLogo.edges[0].node.url.source_url}
          alt={"Logo"}
        />
      </SiteLogoWrapper>
    )}
  />
)

export default SiteLogo