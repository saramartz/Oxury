import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #151414;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 1.2rem;
`

const BedroomCard = ({ bedroom }) => {
  const { content, image, title, slug } = bedroom

  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <Image
        fluid={image.fluid}
        style={{ objectFit: "cover", height: "300px" }}
      />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          className="text-center mb-5"
          css={css`
            font-size: 3rem;
          `}
        >
          {title}
        </h3>
        <p
          css={css`
            text-align: justify;
          `}
        >
          {content}
        </p>

        <Button to={slug}>View</Button>
      </div>
    </div>
  )
}

export default BedroomCard
