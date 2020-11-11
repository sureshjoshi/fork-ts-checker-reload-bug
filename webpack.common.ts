import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { Configuration } from "webpack";

export const outputFolder = "build";

export const common: Configuration = {
    entry: {
        main: "./src/main.tsx",
    },
    module: {
        rules: [
            {
                // All .ts files will be handled by 'ts-loader'.
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            logger: { infrastructure: "console" },
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
};
