import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Container = styled.section`
  padding-top: 4rem;
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
    margin-top: 2rem;
    text-align: justify;
  }
`

const ContentAbout = () => {
  const result = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { title, content, image } = result.allDatoCmsPage.nodes[0]

  return (
    <div className="py-5">
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {title}
      </h2>
      <Container>
        <p> {content} </p>
        <Image
          fluid={image.fluid}
          className="my-5"
          style={{
            boxShadow:
              "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
          }}
        />
      </Container>
    </div>
  )
}

export default ContentAbout
