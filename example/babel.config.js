/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [require('@rnx-kit/polyfills')],
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
  ],
};
