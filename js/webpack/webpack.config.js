const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // You can specify the environment mode to production or development
    mode: "development",
    // You can specify a path to an entry file in multiple ways.
    // An entry is the file where webpack begins bundling all of your modules.
    // For a single entry, write: entry: "./src/index.js"
    // For multiple entry files bundled into a single file, use an array:
    // entry: ["./src/index.js", "./src/client.js", "./src/default.js"]

    // To create multiple bundles from separate entry files, use an object
    entry: "./src/client.js",
    // entry: {
        // Create a bundle "./dist/client.js" (will be named after the below key)
        // client: "./src/client.js",
        // Create a bundle "./dist/defaults.js"
    //     defaults: "./src/defaults.js",
    //     server: "./src/index.js"
    // },
    output: {
        // The 'path' property is used to specify the location where our bundled
        // files are created. By default, it is path.join(__dirname, "build")
        path: path.join(__dirname, "build"),
        // The 'filename' property is used to change the names of the bundled files.
        filename: "[name].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(.js|jsx)$/,
                exclude: /node_modules/,
                // Use 'exclude' with a regular expression to files that should be ignored
                // by this loader. node_modules should always be ignored.
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif|webp|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "images/"
                }
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: "Webpack Demo", // <title> of webpage
            chunks: ["client"],
            template: path.join(__dirname, "src", "index.html")
            // 'chunks' tells webpack which bundles to include in the html file
        })
    ]
}
