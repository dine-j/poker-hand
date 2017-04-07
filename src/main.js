var Result = { "win": 1, "loss": 2, "tie": 3 };

var PokerHand = function(cards) {
	this.cards = parseCards(cards);
	this.score = evaluateScore(this.cards);
};

PokerHand.prototype.parseCards = function(cardsStr) {
    var cards = [];
    cardsStr.split(" ").forEach(function (cardStr) {
        cards.push({
            denomination: cardStr[0],
            suite: cardStr[1]
        });
    });
    return cards;
};

PokerHand.prototype.evaluateScore = function(cards) {

};

PokerHand.prototype.getHighestCard = function() {
	return null;
};

PokerHand.prototype.compareWith = function(other) {
	if(this.score > other.score) {
		return Result.win;
	} else if(this.score < other.score) {
		return Result.loss;
	} else {
		if(this.score === 0) {
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

module.exports = PokerHand;