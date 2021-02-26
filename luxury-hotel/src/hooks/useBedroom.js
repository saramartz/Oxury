import { graphql, useStaticQuery } from "gatsby"

const useBedroom = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsBedroom {
        nodes {
          title
          id
          slug
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

  return data.allDatoCmsBedroom.nodes
}

export default useBedroom
