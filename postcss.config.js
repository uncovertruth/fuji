const path = require("path");
const { version, author, name } = require("./package.json");
const date = new Date();
module.exports = {
  plugins: [
    require("postcss-import")(),
    require("cssnano")(),
    require("postcss-banner")({
      banner: `${name} ${version} | Copyright (c) ${date.getFullYear()} ${author}`,
      important: true
    })
  ]
};
