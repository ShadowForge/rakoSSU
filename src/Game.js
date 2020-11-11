import React from 'react';

export default class Game {
    constructor() {
        this.deck = [];
        this.discard = [];
        this.human = [];
        this.computer = [];
        this.drawnCard = 0;
        this.turnStep = 0;
        this.oldCompHand = [];
        this.computerMove = ""
        this.winner = "Computer";
        this.discardTop = 0;
    }

    nextTurnStep() {
        this.turnStep += 1;
        if (this.turnStep === 3) {
            if (this.checkRack(this.human, "Human")) {
                console.log("Winner")
            }
            this.computerPlay();
            if (this.checkRack(this.computer, "Computer")) {
                console.log("You lose :P")
            }
            this.turnStep = 0;
        }
    }
    set TurnStep(val) {
        this.nextTurnStep();
    }

    get TurnStep() {
        return this.turnStep;
    }

    getTopCard(cardStack) {
        if (this.deck.length === 0) {
            this.replaceDeck();
        }
        let c = cardStack.pop();
        this.drawnCard = c;
        return c;
    }

    addCardToDiscard(card) {
        this.discard.push(card)
        this.discardTop = card;
    }

    findAndReplace(newCard, oldCard, hand, index) {
        hand[index] = newCard;
        this.addCardToDiscard(oldCard);
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    dealInitialHands(deck) {
        for (let i = 0; i < 10; i++) {
            this.human.push(this.getTopCard(deck));
            this.computer.push(this.getTopCard(deck));
        }
        this.oldCompHand = [...this.computer];

    }

    checkRack(hand, who) {

        for (let i = 1; i < hand.length; i++) {
            if (hand[i] < hand[i-1]) {
                return false;
            }
        }
        let y = document.getElementById("WinScreen");
        this.winner = who;

        if (y) {
            y.style.visibility = "visible";
            y.style.zIndex = 990;
        }
        return true;
    }

    replaceDeck() {
        this.deck = [...this.shuffle(this.discard)];
        this.discard = []
        this.addCardToDiscard(this.getTopCard(this.deck))
    }

    computerPlay() {

        let r = Math.floor(Math.random() * 10) % 2;
        console.log(r);
        if (r === 0) {
            let newCard = this.getTopCard(this.discard);
            let loc = Math.floor((newCard - 1) / this.computer.length);
            this.oldCompHand = [...this.computer];
            this.findAndReplace(newCard, this.computer[loc], this.computer, loc);

            this.computerMove = `Drew ${newCard} from discard and got rid of ${this.oldCompHand[loc]}.`;
        } else {
            let newCard = this.getTopCard(this.deck);
            r = Math.floor(Math.random * 10) % 2;
            if (r === 0) {
                let loc = Math.floor((newCard - 1) / this.computer.length);
                this.oldCompHand = [...this.computer];
                this.findAndReplace(newCard, this.computer[loc], this.computer, loc);
                this.computerMove = `Drew ${newCard} from deck and got rid of ${this.oldCompHand[loc]}.`;

            } else {
                this.addCardToDiscard(newCard);
                this.computerMove = `Drew ${newCard} from deck and discarded it.`;
            }

        }
    }

    startGame() {
        for (let i = 1; i < 61; i++) {
            this.deck.push(i);
        }
        this.shuffle(this.deck);
        this.addCardToDiscard(this.getTopCard(this.deck));
        this.dealInitialHands(this.deck);
    }

    reset() {
        this.deck = [];
        this.discard = [];
        this.human = [];
        this.computer = [];
        this.drawnCard = 0;
        this.turnStep = 0;
        this.oldCompHand = [];
        this.computerMove = ""
        this.winner = "Computer";
    }
}

export const GameContext = React.createContext(null);
