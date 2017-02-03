module.exports = {
  presets: [
    require('./'),
  ],
  plugins: [
    [
      require('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: true,
      },
    ],
  ],
};
