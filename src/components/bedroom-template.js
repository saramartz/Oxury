import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/react"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsBedroom(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        image {
          fluid(maxWidth: 2000) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const BedroomTemplate = ({
  data: {
    allDatoCmsBedroom: { nodes },
  },
}) => {
  const { title, content, image } = nodes[0]

  return (
    <Layout>
      <main
        className="my-5 pb-5 text-center"
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h1 className="my-5 p-5">{title}</h1>
        <p className="my-5">{content}</p>
        <Image
          fluid={image.fluid}
          style={{
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
          }}
        />
      </main>
    </Layout>
  )
}

export default BedroomTemplate
