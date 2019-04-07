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
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'refactionjs/public'),
        port: 8888
    }
};
