const main = require('../main/main');

let inputs=[2,5,3,8]
describe('main()', () => {
    it('correct direction', function() {
        let summary = main(inputs);
        let expected = '1A1B'
        expect(summary).toEqual(expected)
    });
});

exports.inputs=inputs;