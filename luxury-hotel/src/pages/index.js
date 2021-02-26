import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Cover from "../components/cover-image"
import ContentIdx from "../components/content-idx"
import useBedroom from "../hooks/useBedroom"
import BedroomCard from "../components/bedroom-card"

const BedroomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto;
  padding: 0 4rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const Index = () => {
  const bedroom = useBedroom()

  return (
    <Layout>
      <Cover />
      <ContentIdx />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        OUR BEDROOMS
      </h2>

      <BedroomList>
        {bedroom.map(elm => <BedroomCard key={elm.id} bedroom={elm} />)}
      </BedroomList>
    </Layout>
  )
}

export default Index
