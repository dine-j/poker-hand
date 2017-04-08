var assert = require('assert');
var PokerHand = require('../src/main');

describe('PokerHand', function () {
    describe('parseCards', function() {
        it('Should parse given example to card objects', function() {
            var cardsStr = "KS 2H 5C JD TD";
            var hand = new PokerHand(cardsStr);
            var cards = [
                {
                    denomination: "K",
                    suit: "S",
                    value: 13
                },
                {
                    denomination: "2",
                    suit: "H",
                    value: 2
                },
                {
                    denomination: "5",
                    suit: "C",
                    value: 5
                },
                {
                    denomination: "J",
                    suit: "D",
                    value: 11
                },
                {
                    denomination: "T",
                    suit: "D",
                    value: 10
                }
            ];
            var result = hand.parseCards(cardsStr);
            assert.deepEqual(result, cards);
        });
    });

    describe('evaluateScore', function() {
        it('Should give 9 to a Royal Flush', function() {
            var hand = new PokerHand("TC JC QC KC AC");
            var cards = [
                {
                    denomination: "T",
                    suit: "C",
                    value: 10
                },
                {
                    denomination: "J",
                    suit: "C",
                    value: 11
                },
                {
                    denomination: "Q",
                    suit: "C",
                    value: 12
                },
                {
                    denomination: "K",
                    suit: "C",
                    value: 13
                },
                {
                    denomination: "A",
                    suit: "C",
                    value: 14
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 9);
        });

        it('Should give 8 to a Straight Flush', function() {
            var hand = new PokerHand("3S 4S 5S 6S 7S");
            var cards = [
                {
                    denomination: "3",
                    suit: "S",
                    value: 3
                },
                {
                    denomination: "4",
                    suit: "S",
                    value: 4
                },
                {
                    denomination: "5",
                    suit: "S",
                    value: 5
                },
                {
                    denomination: "6",
                    suit: "S",
                    value: 6
                },
                {
                    denomination: "7",
                    suit: "S",
                    value: 7
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 8);
        });

        it('Should give 7 to a Four of a Kind', function() {
            var hand = new PokerHand("TC TS TH TD 4D");
            var cards = [
                {
                    denomination: "T",
                    suit: "C",
                    value: 10
                },
                {
                    denomination: "T",
                    suit: "S",
                    value: 10
                },
                {
                    denomination: "T",
                    suit: "H",
                    value: 10
                },
                {
                    denomination: "T",
                    suit: "D",
                    value: 10
                },
                {
                    denomination: "4",
                    suit: "D",
                    value: 4
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 7);
        });

        it('Should give 6 to a Full House', function() {
            var hand = new PokerHand("JH JC 7H 7D 7C");
            var cards = [
                {
                    denomination: "J",
                    suit: "H",
                    value: 11
                },
                {
                    denomination: "J",
                    suit: "C",
                    value: 11
                },
                {
                    denomination: "7",
                    suit: "H",
                    value: 7
                },
                {
                    denomination: "7",
                    suit: "D",
                    value: 7
                },
                {
                    denomination: "7",
                    suit: "C",
                    value: 7
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 6);
        });

        it('Should give 5 to a Flush', function() {
            var hand = new PokerHand("2H 6H 9H QH KH");
            var cards = [
                {
                    denomination: "2",
                    suit: "H",
                    value: 2
                },
                {
                    denomination: "6",
                    suit: "H",
                    value: 6
                },
                {
                    denomination: "9",
                    suit: "H",
                    value: 9
                },
                {
                    denomination: "Q",
                    suit: "H",
                    value: 12
                },
                {
                    denomination: "K",
                    suit: "H",
                    value: 13
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 5);
        });

        it('Should give 4 to a Straight', function() {
            var hand = new PokerHand("3H 4C 5D 6C 7S");
            var cards = [
                {
                    denomination: "3",
                    suit: "H",
                    value: 3
                },
                {
                    denomination: "4",
                    suit: "C",
                    value: 4
                },
                {
                    denomination: "5",
                    suit: "D",
                    value: 5
                },
                {
                    denomination: "6",
                    suit: "C",
                    value: 6
                },
                {
                    denomination: "7",
                    suit: "S",
                    value: 7
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 4);
        });

        it('Should give 3 to a Three of a Kind', function() {
            var hand = new PokerHand("9C 9H 9D 6C 7S");
            var cards = [
                {
                    denomination: "9",
                    suit: "C",
                    value: 9
                },
                {
                    denomination: "9",
                    suit: "H",
                    value: 9
                },
                {
                    denomination: "9",
                    suit: "D",
                    value: 9
                },
                {
                    denomination: "6",
                    suit: "C",
                    value: 6
                },
                {
                    denomination: "7",
                    suit: "S",
                    value: 7
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 3);
        });

        it('Should give 2 to a Two Pairs', function() {
            var hand = new PokerHand("4D 4S JC JH 9H");
            var cards = [
                {
                    denomination: "4",
                    suit: "D",
                    value: 4
                },
                {
                    denomination: "4",
                    suit: "S",
                    value: 4
                },
                {
                    denomination: "J",
                    suit: "C",
                    value: 11
                },
                {
                    denomination: "J",
                    suit: "H",
                    value: 11
                },
                {
                    denomination: "9",
                    suit: "H",
                    value: 9
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 2);
        });

        it('Should give 1 to a Pair', function() {
            var hand = new PokerHand("TD TC 2H 7S 9H");
            var cards = [
                {
                    denomination: "T",
                    suit: "D",
                    value: 10
                },
                {
                    denomination: "T",
                    suit: "C",
                    value: 10
                },
                {
                    denomination: "2",
                    suit: "H",
                    value: 2
                },
                {
                    denomination: "7",
                    suit: "S",
                    value: 7
                },
                {
                    denomination: "9",
                    suit: "H",
                    value: 9
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 1);
        });

        it('Should give 0 to a High Card', function() {
            var hand = new PokerHand("AC 3S 7D 9C 4H");
            var cards = [
                {
                    denomination: "A",
                    suit: "C",
                    value: 14
                },
                {
                    denomination: "3",
                    suit: "S",
                    value: 3
                },
                {
                    denomination: "7",
                    suit: "D",
                    value: 7
                },
                {
                    denomination: "9",
                    suit: "C",
                    value: 9
                },
                {
                    denomination: "4",
                    suit: "H",
                    value: 4
                }
            ];
            var result = hand.evaluateScore(cards);
            assert.equal(result, 0);
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