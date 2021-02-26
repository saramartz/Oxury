import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const CoverImage = styled(BackgroundImage)`
  height: 700px;
`
const CoverText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  color: #bf9d53;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 6px 6px -2px rgba(0, 0, 0, 0.6) inset;

  h1 {
    font-size: 4rem;
    margin: 0%;

    @media (min-width: 992px) {
      font-size: 7.9rem;
    }
  }
  h2 {
    font-size: 1.8rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`
const BackgroundText = styled.div`
  background-color: #0000004f;
  border-radius: 10px;
  padding: 35px;
  backdrop-filter: blur(2px);
`

const Cover = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "22.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <CoverImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <CoverText>
          <BackgroundText>
            <h1>Welcome to Oxury</h1>
            <h2 className="mt-5 text-center">The hotel of your dreams</h2>
          </BackgroundText>
        </CoverText>
      </CoverImage>
    </>
  )
}

export default Cover
