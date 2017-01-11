module.exports = {
  presets: [
    [require('babel-preset-env'), {
      targets: {
        node: 6,
      },
    }],
    require('babel-preset-flow'),
  ],
  plugins: [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
  ],
};
