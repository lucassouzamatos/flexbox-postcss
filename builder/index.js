const postcss = require('postcss');
const builder = require('./builder');

/** @module flexboxPostcss */
module.exports = postcss.plugin('flexbox-postcss', function() {
  return function(root) {
    builder(root);
  };
});