const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@/hooks"] = path.join(__dirname, "hooks");
    return config;
  },
};
