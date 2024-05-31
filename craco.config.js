const path = require("path");
const addPath = (dir) => path.join(__dirname, dir);
const CracoLessPlugin = require("craco-less");
const { name } = require("./package.json");
const WebpackObfuscator = require("webpack-obfuscator");
const { whenProd } = require("@craco/craco");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const PORT = 9000;
let HOST = "127.0.0.1";
const publicPath = {
  development: `http://${HOST}:${PORT}`,
  production: `https://xxxxx/${name}`,
};

module.exports = {
  devServer: {
    port: PORT,
    client: {
      webSocketURL: {
        hostname: HOST,
      },
    },
  },
  webpack: {
    alias: {
      "@": addPath("src"),
      "layouts": addPath("src/layouts"),
      "pages": addPath("src/views/pages"),
    },
    configure: {
      output: {
        publicPath: publicPath[process.env.NODE_ENV] + "/",
        library: `${name}-[name]`,
        libraryTarget: "umd",
        chunkLoadingGlobal: `webpackJsonp_${name}`,
      },
      module: {
        rules: [
          ...whenProd(() => {
            return [
              {
                test: /\.(js|ts)$/,
                enforce: "post",
                use: [
                  {
                    loader: WebpackObfuscator.loader,
                    options: {
                      compact: false,
                      controlFlowFlattening: true,
                      controlFlowFlatteningThreshold: 1,
                      numbersToExpressions: true,
                      simplify: true,
                      shuffleStringArray: true,
                      splitStrings: true,
                      stringArrayThreshold: 1,
                      stringArrayEncoding: ["base64"],
                    },
                  },
                ],
                include: [path.resolve(__dirname, "src/api")],
              },
            ];
          }, []),
        ],
      },
    },
    // plugins: [
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: "server",
    //     analyzerHost: "127.0.0.1",
    //     analyzerPort: 8888,
    //     openAnalyzer: true, // 构建完打开浏览器
    //     reportFilename: path.resolve(__dirname, `analyzer/index.html`),
    //   }),
    // ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    }
  ]
};
