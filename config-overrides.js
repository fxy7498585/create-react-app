const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    ibraryName: 'antd-mobile',
    tyle: 'css',
  })
);