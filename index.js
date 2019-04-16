require("@babel/register")({
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "css-modules-transform",
    "file-loader"
]
});
require("./app");
