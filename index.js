module.exports = {
  presets: [require('babel-preset-env'), require('babel-preset-flow')],
  plugins: [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
  ],
};
