const postcss = require('postcss');
const _ = require('lodash');

function add(rule) {
    _.mapKeys(this, function(value, key) {
        rule.prepend(postcss.decl({ prop: key, value }))
    });
}

function builder(root) {
    root.walkRules(rule => {
        _.bind(add, { display: 'flex' }, rule)();
    })

    root.walkDecls(decl => {
        // if (decl.prop === 'direction') {
        //     decl.prop = 'flex-direction';
        //     decl.value = 'column';
        // }
    });

    return root;
}


module.exports = builder;