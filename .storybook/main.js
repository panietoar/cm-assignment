const path = require('path');
const rootPath = path.resolve(__dirname, "../src");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-knobs"],
};

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  config.resolve.alias["@"] = rootPath;
  return config;
};
