var postcss = require('postcss');
const builder = require('./builder');

module.exports = postcss.plugin('flexbox-postcss', function() {
  return function(root, rule) {
    builder(root);
  };
});