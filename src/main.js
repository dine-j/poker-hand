var Result = { "win": 1, "loss": 2, "tie": 3 };
var Hand = {
	"RoyalFlush": 9,
	"StraightFlush": 8,
	"FourOfAKind": 7,
	"FullHouse": 6,
	"Flush": 5,
	"Straight": 4,
	"ThreeOfAKind": 3,
	"TwoPairs": 2,
	"Pair": 1,
	"HighCard": 0
};

var PokerHand = function(cards) {
	this.cards = this.parseCards(cards);
	this.score = this.evaluateScore(this.cards);
};

PokerHand.prototype.parseCards = function(cardsStr) {
    var cards = [];
    var values = {
    	T: 10,
		J: 11,
		Q: 12,
		K: 13,
		A: 14
	};

    for(var i = 0; i < 10; ++i) {
    	values[String(i)] = i;
	}

    cardsStr.split(" ").forEach(function (cardStr) {
        cards.push({
            denomination: cardStr[0],
            suit: cardStr[1],
			value: values[cardStr[0]]
        });
    });
    return cards;
};

PokerHand.prototype.evaluateScore = function(cards) {
	var sequence = isSequence(cards);
	var sameSuit = true;
	for(var i = 1; i < cards.length; ++i) {
		if(cards[0].suit !== cards[i].suit)
			sameSuit = false;
	}
	if(sameSuit && isRoyalFlush(cards))
		return Hand.RoyalFlush;
	if(sameSuit && sequence)
		return Hand.StraightFlush;
	if(getDecreasingNumberOfDenominations(cards)[0] === 4)
		return Hand.FourOfAKind;
    if(getDecreasingNumberOfDenominations(cards)[0] === 3 && getDecreasingNumberOfDenominations(cards)[1] === 2)
    	return Hand.FullHouse;
	if(sameSuit)
		return Hand.Flush;
	if(sequence)
		return Hand.Straight;
	if(getDecreasingNumberOfDenominations(cards)[0] === 3)
		return Hand.ThreeOfAKind;
    if(getDecreasingNumberOfDenominations(cards)[0] === 2 && getDecreasingNumberOfDenominations(cards)[1] === 2)
    	return Hand.TwoPairs;
    if(getDecreasingNumberOfDenominations(cards)[0] === 2)
    	return Hand.Pair;
	return Hand.HighCard;
};

PokerHand.prototype.getHighestCard = function() {
	this.cards.sort(function(a, b) {
		return b.value - a.value;
	});
	return this.cards[0].value;
};

PokerHand.prototype.compareWith = function(other) {
	if(this.score > other.score) {
		return Result.win;
	} else if(this.score < other.score) {
		return Result.loss;
	} else {
		if(this.score === 0 && this.getHighestCard() !== other.getHighestCard()) {
			if(this.getHighestCard() > other.getHighestCard()) {
				return Result.win;
			} else {
				return Result.loss;
			}
		} else {
			return Result.tie;
		}
	}
};

function isRoyalFlush(cards) {
    cards.sort(function(a, b) {
        return a.value - b.avlue;
    });
    return (cards[4].value - cards[0].value) === 4 && cards[0].value === 10;
}

function isSequence(cards) {
    cards.sort(function(a, b) {
        return a.value - b.avlue;
    });
    return (cards[4].value - cards[0].value) === 4;
}

function getDecreasingNumberOfDenominations(cards) {
    var denominations = {};
    for(var i = 0; i < cards.length; ++i) {
        if(cards[i].denomination in denominations)
            ++denominations[cards[i].denomination];
        else
            denominations[cards[i].denomination] = 1;
    }
    return Object.keys(denominations).map(function(key){
        return denominations[key];
    }).sort(function(a,b) {
        return b - a;
    });
}





module.exports = {
	PokerHand: PokerHand,
	isRoyalFlush: isRoyalFlush,
	isSequence: isSequence,
    getDecreasingNumberOfDenominations: getDecreasingNumberOfDenominations
};
