const path = require('path')
const { slash } = require('gatsby-core-utils')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const pages = [
    'item-1',
    'item-2',
    'item-3',
    'item-4',
    'item-5',
    'item-6',
    'item-7',
    'item-8',
  ]
  const googleShoppingTemplate = path.resolve('src/templates/google-shopping.js')
  for(const page in pages) {
    createPage({
      path: `/google/${pages[page]}`,
      component: slash(googleShoppingTemplate),
      context: {
        id: pages[page],
      },
    })
  }

}
