SystemJS.config({
  defaultExtension: true,
  packages: {
    "*": {
      main: './app.js',
    }
  },
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    },
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.tsx': {
      'babelOptions': {
        react: true
      }
    },
    '*.ts': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {loader: 'css'},
  },
  paths: {
    "npm:": "./package/",
  },
  map: {
    'plugin-babel': 'npm:plugin-babel.js',
    'systemjs-babel-build': 'npm:system-babel.js',
    'react': 'npm:react.js',
    'react-dom': 'npm:react-dom.js',
    'css': 'npm:css-system.js',
    '@': "./components",
  },
  transpiler: 'plugin-babel',
});

SystemJS.import('./app.jsx')
  .catch((error)=>{
    console.error(error);
  });
