require("@babel/register")({
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "css-modules-transform",
    "file-loader"
]
});
global.fetch = require("node-fetch");
require("./app");
