const path = require("path");
const resolve = dir => path.join(__dirname, dir);
// 增加环境变量
process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "docs/main.ts",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "IMS-UI Docs"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("docs"),
        "@ims-ui": resolve("src")
        // "@dist": resolve("dist")
      }
    }
  }
};
