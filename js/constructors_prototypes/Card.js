// Create a class, Card, that represents a playing card. 
// Instances of the card should be constructed with two values: a value and a suit.

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    toString() {
        if (this.value === 1) {
            this.value = `Ace`
        } else if (this.value === 11) {
            this.value = `Jack`
        } else if (this.value === 12) {
            this.value = `Queen`
        } else if (this.value === 13) {
            this.value = `King`
        } else if (this.value > 1 && this.value < 11) {
            this.value = `${this.value}`
        } else {
            return `Invalid card`
        }
        const suit = this.suit[0].toUpperCase() + this.suit.slice(1)
        return `Card { ${this.number} of ${this.suit} }`
    }
}

const aceOfSpades = new Card(1, 'Spades');
const tenOfHearts = new Card(10, 'Hearts');
const kingOfDiamonds = new Card(13, 'Diamonds');

// Add a prototype method, toString, to Card that returns a string to display the card:

aceOfSpades.toString() // returns 'Card { Ace of Spades }'
tenOfHearts.toString() // returns 'Card { 10 of Hearts }'
console.log(kingOfDiamonds.toString()) // returns 'Card { King of Diamonds }'

// Create a class, Deck, that represents a deck of playing cards. 
// In the constructor, initialize a full "deck" of Card instances 
// representing all 52 possible cards without jokers storing it in the Deck instance. 
// You must not create all 52 cards manually. Use iteration to create all cards.

// Finally, add the following prototype methods to Deck:
// shuffle method that will randomly reorder the cards in the deck.
// draw that will remove and return the top card of the deck.
// reset method which resets deck to all 52 cards in order.

class Deck {
    constructor() {
        super();
        this.reset();
    }
    shuffle() {
        this.deck = this.deck.sort(function() {
            return 0.5 - Math.random();
        });
    
    }
    draw() {
        const card = this.deck[0];
        this.deck = this.deck.slice(1);
        return card;
    }
    reset() {
        const values = [];
        for (let i = 1; i <= 13; i++) {
            if (i === 1) {
                values.push('Ace')
            } else if (i === 11) {
                values.push('Jack')
            } else if (i === 12) {
                values.push('Queen')
            } else if (i === 13) {
                values.push('King')
            } else {
                values.push(i);
            }
        }
        const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const cards = [];
        for (let value of values) {
            for (let suit of suits) {
                cards.push(new Card(value, suit));
            }
        }
        this.deck = cards;
    }
}

const deck1 = new Deck();
deck1.shuffle()
console.log(deck1.deck)

