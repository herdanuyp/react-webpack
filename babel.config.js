const presets = [
  [
    '@babel/env',
    {
      targets: {
        browsers: ['>0.2%', 'not dead', 'not op_mini all', 'last 1 version']
      },
      useBuiltIns: 'usage'
    }
  ],
  [
    '@babel/preset-react',
    {
      pragma: 'dom', // default pragma is React.createElement
      pragmaFrag: 'DomFrag', // default is React.Fragment
      throwIfNamespace: false, // defaults to true,
      useSpread: true,
      development: process.env.BABEL_ENV === 'development'
    }
  ]
];

const plugins = [
  '@babel/plugin-transform-react-jsx',
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-syntax-dynamic-import',
  ['@babel/plugin-proposal-class-properties', { loose: true }]
];

module.exports = { presets, plugins };
