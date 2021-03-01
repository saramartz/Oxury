import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import useSeo from "../hooks/useSeo"
import Kindelserif from "../fonts/Kindelserif.ttf"

const Layout = props => {
  const seo = useSeo()

  const {
    siteName,
    fallbackSeo: { description, title },
  } = seo

  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Kindelserif";
            src: local("Kindelserif"), url(${Kindelserif}) format("truetype");
            font-weight: 300;
            font-style: normal;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 18px;
            font-size: 1.6rem;
            font-family: "Raleway", sans-serif;
            font-weight: 300;
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          p {
            font-size: 1.6rem;
          }
          main {
            flex: 1;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Kindelserif", sans-serif;
            letter-spacing: 0.6rem;
          }
        `}
      />
      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <Header />
      {props.children}
      <Footer title={title} />
    </>
  )
}

export default Layout
