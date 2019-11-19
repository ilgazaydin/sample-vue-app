module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sample-vue-app/" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "sass-loader",
            {
              loader: "sass-resources-loader",
              options: {
                resources: "./src/assets/scss/_reference.scss"
              }
            }
          ]
        }
      ]
    }
  }
};
