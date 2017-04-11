module.exports = {
  presets: [
    ['env', {
      targets: {
        node: 7.8,
      },
    }],
    require('babel-preset-flow'),
  ],
  plugins: [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
    [
      require('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: false,
      },
    ],
  ],
};

