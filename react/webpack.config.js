const webpack = require("webpack");
const path = require("path");

module.exports = {
  name:"bundle",
  entry:`${path.resolve(__dirname, ".")}/app/bundle.jsx`,
  output:{
    path:`${path.resolve(__dirname, ".")}/../nginx/public/js`,
    filename:"bundle.js",
  },
  module:{
    rules:[
      {
        test:/\.jsx$/,
        loader:"babel-loader",
        options:{
          presets:["@babel/preset-react"]
        }
      }
    ]
  }
};
