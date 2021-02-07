const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

const packageJson = require("./package.json");

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  for (const dependency of Object.keys(packageJson.peerDependencies)) {
    singleSpaWebpackConfig.externals[dependency] = dependency;
  }
  
  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
