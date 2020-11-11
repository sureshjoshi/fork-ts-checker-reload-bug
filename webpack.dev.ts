import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { merge } from "webpack-merge";
import { common, outputFolder } from "./webpack.common";

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}
process.traceDeprecation = true;
module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: `./${outputFolder}`,
        publicPath: "/",
    },
    devtool: "eval-cheap-module-source-map",
    output: {
        path: __dirname + `/${outputFolder}`,
        pathinfo: false,
        publicPath: "/",
    },
} as Configuration);

console.log(module.exports);
