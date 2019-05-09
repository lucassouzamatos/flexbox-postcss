var cases = require('postcss-parser-tests');

cases.each((name, css, ideal) => {
    it(`parse ${name}`, () => {
        let root = parse(css, { from: name });
        let json = cases.jsonify(root);
        expect(json).to.eql(ideal);
    });
});