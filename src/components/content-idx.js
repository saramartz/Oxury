import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const TextIdx = styled.div`
  padding: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }

  p {
    line-height: 2;
    text-align: justify;
  }
`

const ContentIdx = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { title, content, image } = info.allDatoCmsPage.nodes[0]

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          padding-top: 6rem;
          box-shadow: 2px 6px 6px -6px rgba(0, 0, 0, 0.6) inset;
        `}
      >
        {title}
      </h2>

      <TextIdx>
        <p className="mb-5">{content}</p>
        <Image
          fluid={image.fluid}
          style={{
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
          }}
        />
      </TextIdx>
    </>
  )
}

export default ContentIdx
