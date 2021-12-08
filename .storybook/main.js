module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ]
}

// .storybook/main.js
const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')
module.exports = {
  stories: [...getStoriesPaths() ]
}