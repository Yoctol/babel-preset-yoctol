module.exports = {
  presets: [require('./'), require('babel-preset-react')],
  env: {
    production: {
      presets: [require('babel-preset-react-optimize')],
      plugins: [
        require('babel-plugin-transform-remove-debugger'),
        require('babel-plugin-dev-expression'),
      ],
    },
    development: {
      plugins: [require('react-hot-loader/babel')],
    },
  },
};
