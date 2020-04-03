const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-knobs", '@storybook/preset-scss'],
  webpackFinal: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, "../src");
    return config;
  }
};
