const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: "./refactionjs/src/js/index.js",
  output: {
    path: path.resolve(__dirname, "refactionjs/public"),
    filename: "bundle.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "babel-preset-react"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, "refactionjs/public")
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'refactionjs/public'),
    port: 8888
  }
};
