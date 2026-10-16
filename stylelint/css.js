// StyleLint Config For CSS

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/extends-recess-order'),
    require.resolve('./modules/extends-standard-css'),
    require.resolve('./modules/common')
  ]
};
