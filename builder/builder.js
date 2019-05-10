const postcss = require('postcss');
const _ = require('lodash');

const props = {
    direction: 'flex-direction'
}

const values = {
    horizontal: 'column',
    vertical: 'row'
};

function change(option) {
    let value = this[option];
    
    if (!props[value] && !values[value]) {
        return value;
    }
    value = option === 'prop' ? props[value] : values[value]; 

    if (value) {
        return value;
    } 
    return this[option];
}

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
        decl.value = _.bind(change, decl, 'value')();
        decl.prop = _.bind(change, decl, 'prop')();
    });

    return root;
}


module.exports = builder;