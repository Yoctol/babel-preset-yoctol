module.exports = {
  presets: [
    require('./'),
  ],
  env: {
    production: {
      presets: [
        require('react-optimize'),
      ],
      plugins: [
        require('babel-plugin-transform-remove-debugger'),
        require('babel-plugin-dev-expression'),
      ]
    },
    development: {
      plugins: [
        require('react-hot-loader/babel'),
      ],
    },
  },
};
