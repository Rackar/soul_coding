module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  productionSourceMap: false, //去除build版本的map
  devServer: {
    // publicPath: "/", // 和 publicPath 保持一致,
    port: 9527
  }
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === "production") {
  //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
  //   }
  // }
};
