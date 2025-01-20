module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel',
    'module:metro-react-native-babel-preset',
    // 'module:metro-react-native-babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          'Components': './src/Components',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
