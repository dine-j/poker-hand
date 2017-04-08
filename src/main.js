var PokerHand = require('../src/pokerHand');
var Result = require('../src/pokerHand').Result;

console.log("This program compares 2 poker hands and determines a winner");

console.log("Player 1 name: ");
var player1 = readline();
console.log("Please type in your cards: ");
hand1 = new PokerHand(readline());

console.log("Player 2 name: ");
var player2 = readline();
console.log("Please type in your cards: ");
hand1 = new PokerHand(readline());

if(hand1.compareWith(hand2) === Result.win)
    console.log(player1 + " wins!");
else if(hand1.compareWith(hand2) === Result.loss)
    console.log(player2 + " wins!");
else
    console.log("It's a tie!");
