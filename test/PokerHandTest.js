var assert = require('assert');
var PokerHand = require('../src/main');

describe('PokerHand', function () {
    describe('parseCards', function() {
        it(' ', function() {


            assert.fail();
        });
    });

    describe('evaluateScore', function() {
        it(' ', function() {


            assert.fail();
        });
    });

    describe('getHighestCard', function() {
        it(' ', function() {


            assert.fail();
        });
    });

    describe('compareWith', function() {
        it('Same hands should tie', function() {
            var hand1 = new PokerHand("KS 2H 5C JD TD");
            var hand2 = new PokerHand("KS 2H 5C JD TD");

            var result = hand1.compareWith(hand2);

            assert.equal(result, 3);
        });
    });
});