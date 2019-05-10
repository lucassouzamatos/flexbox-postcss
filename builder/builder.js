const postcss = require('postcss');
const _ = require('lodash');

/**
 * @property {string} direction
 */
const props = {
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    horizontalJustify: 'justify-content',
    verticalJustify: 'align-items'
}

/**
 * @property {string} horizontal
 * @property {string} vertical
 */
const values = {
    horizontal: 'row',
    vertical: 'column',
    left: 'flex-start',
    right: 'flex-end'
};

/**
 * Altera estrutura da declaração 
 * @param {string} option - prop ou value
 */
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

/**
 * Adiciona declaração 
 * @param {object} rule 
 */
function add(rule) {
    console.log(rule);
    _.mapKeys(this, function(value, key) {
        rule.prepend(postcss.decl({ prop: key, value }))
    });
}

/**
 * Responsável por centralizar todas as funções
 * @param {object} root 
 */
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