const path = require("path");

module.exports = {
  entry: {
    slides: "../app/src/js/slides.js",
    plot: "../app/src/js/dashboard/plot.js",
    download: "../app/src/js/dashboard/download.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../app/static/js"),
    clean: true,
  },

  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
  },
};
