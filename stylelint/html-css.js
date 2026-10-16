// StyleLint Config For CSS + HTML/Vue

module.exports = {
  extends: [
    // ...
    require.resolve('./modules/extends-recess-order'),
    require.resolve('./modules/extends-standard-css'),
    require.resolve('./modules/extends-html'),
    require.resolve('./modules/common')
  ]
};
