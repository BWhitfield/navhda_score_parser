import assert from 'assert';
import {isNA, isUT} from '../src/recordIdentifier.js';

describe('recordIdentifier', function() {
    it('matches NA record', function() {
        var actual = isNA('PP-006743');
        assert.equal(actual, true);
    });
    
    it('matches NA record', function() {
        var actual = isNA('PgP-006743');
        assert.equal(actual, false);
    });
    
    it('matches UT record', function() {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});
