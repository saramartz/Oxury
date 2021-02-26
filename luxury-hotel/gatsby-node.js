exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsBedroom {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("No results ", result.errors)
  }

  const bedroom = result.data.allDatoCmsBedroom.nodes

  bedroom.forEach(elm => {
    actions.createPage({
      path: elm.slug,
      component: require.resolve("./src/components/bedroom-template.js"),
      context: {
        slug: elm.slug,
      },
    })
  })
}
