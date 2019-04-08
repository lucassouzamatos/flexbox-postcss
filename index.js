var postcss = require('postcss');

module.exports = postcss.plugin('flexbox-postcss', function() {
  return function(root) {
    root.walkDecls(decl => {
        if (decl.prop === 'test')
            decl.value = 'testing...';
    })
  };
});