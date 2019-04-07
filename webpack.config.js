const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./refactionjs/src/js/App.js",
    output: {
        path: path.resolve(__dirname, "refactionjs/public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
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
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'refactionjs/public'),
        port: 8888
    }
};
