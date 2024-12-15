/**
 * 获取当前环境的配置
 */
let config;
const env = process.env.NODE_ENV ?? "local";
// 根据环境变量加载不同的配置文件 生产-本地
if (env === "local") {
  config = require("./config");
} else {
  config = require(`./config.${env}`);
}

module.exports = config;
