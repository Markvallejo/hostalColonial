exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/home",
    component: require.resolve("./src/templates/home.jsx"),
    context: {},
    defer: true,
  })
}
