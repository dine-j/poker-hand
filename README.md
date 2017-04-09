# Poker hand

Front-end technical test in Javascript.

## Task

A poker hand has a constructor that accepts a string containing 5 cards: 

```
var hand = new PokerHand("KS 2H 5C JD TD");
```

and a method to compare itself to another hand

```
PokerHand.prototype.compareWith = function(hand) { /* Your code here */ };
```

The characteristics of the string of cards are:
* A space is used as card separator
* Each card consists of two characters
* The first character is the value of the card, valid characters are: `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `T`(en), `J`(ack), `Q`(ueen), `K`(ing), `A`(ce)
* The second character represents the suit, valid characters are: `S`(pades), `H`(earts), `D`(iamonds), `C`(lubs)

The result of your poker hand compare can be one of these 3 options:
* Win should return the integer `1`
* Loss should return the integer `2`
* Tie should return the integer `3`

The ranking of the hands should follow the [Texas Hold'em rules](http://freepokerhoney.com/website_images/8245/poker-strategy/poker-hand-rankings.png)

## How to run

### Dependencies

* `npm`
* `node`

Dependencies for tests should be installed using `npm install`

### Main program

The main program can be launched by using `npm start`.
It's a small console interactive program asking for cards from two players and determining a winner.

### Testing

Testing was done using `mocha` and tests can be run using `npm test`.

## Licence

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.