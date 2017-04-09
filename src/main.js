var PokerHand = require('../src/pokerHand').PokerHand;
var Result = require('../src/pokerHand').Result;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("This program compares 2 poker hands and determines a winner");

var player1 = "";
var player2= "";
rl.question('Player 1 name: ', function(answer) {
    player1 = answer;

    rl.question('Please type in your cards: ', function (answer) {
        var hand1 = new PokerHand(answer);

        rl.question('Player 2 name: ', function (answer) {
            player2 = answer;

            rl.question('Please type in your cards: ', function (answer) {
                var hand2 = new PokerHand(answer);

                rl.close();

                if(hand1.compareWith(hand2) === Result.win)
                    console.log(player1 + " wins!");
                else if(hand1.compareWith(hand2) === Result.loss)
                    console.log(player2 + " wins!");
                else
                    console.log("It's a tie!");
            });
        });
    });
});
