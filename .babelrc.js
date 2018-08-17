module.exports = {
  presets: ['@babel/env', '@babel/react', 'next/babel'],
  plugins: [['styled-components', { ssr: true, displayName: true, preprocess: false }]],
};

// {
//   presets: ['next/babel', '@babel/preset-env'],
//   plugins: [['styled-components', { ssr: true, displayName: true, preprocess: false }]],
//   env: {
//     development: {
//       plugins: ['inline-dotenv'],
//     },
//     production: {
//       plugins: ['transform-inline-environment-variables'],
//     },
//   },
// };