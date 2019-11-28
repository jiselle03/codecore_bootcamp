// Create an object that represents a deck of playing cards.

// It will have a property cards that contains an array of all 52 cards including all clubs, 
// spades, hearts and diamonds. Use a loop to generate the cards instead of adding each manually. 
// The cards should be represented as an object with the properties: suit & number.

// Additionally, add the following methods to the deck:

// shuffle will randomly reorder the cards in the deck.
// draw will remove and return the top card of the deck.
// reset method which resets deck to all 52 cards.

const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const numbers = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

const deck = {
  cards: [],
  addCards(suits, numbers) {
      for (let suit in suits) {
          for (let number in numbers) {
            card = {'suits': suits[suit], 'number': numbers[number]}
            this.cards.push(card);
          }
      }
    },
    shuffle() {
        for(let i = 0; i < this.cards.length; i++) {
            let random = Math.floor(Math.random() * 52);
            [this.cards[i], this.cards[random]] = [this.cards[random], this.cards[i]]
        }
        return this.cards
    },
    draw() {
        this.cards.shift();
    },
    reset() {
        this.cards = [];
        this.addCards(suits, numbers);
    },
  };

deck.addCards(suits, numbers);
console.log(deck.cards);
deck.draw();
console.log(deck.cards.length);
deck.reset();
console.log(deck.cards);
console.log(deck.cards.length);