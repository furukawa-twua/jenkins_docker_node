var assert = require('assert');
var myfuncs = require('./calc.js');
 
describe('myfuncs', function() {
        describe('add', function() {
                it ('add 1 and 2 returns 3', function() {
                        assert.equal(myfuncs.add(1,2), 3);
                });
        });
        describe('square', function() {
                it ('square(2) returns 4', function() {
                        assert.equal(myfuncs.square(2), 4);
                });
        });
        describe('cube', function() {
                it ('cube(2) returns 8', function() {
                        assert.equal(myfuncs.cube(2), 8);
                });
        });
});
