// JavaScript source code
//tonk game
//***Edited on MAC***
//goal of game get 31 points or closest to 31 
//cards must be same suit to add values together

//functions for user input
//start 

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//vars 
let numPlayers;
let currentPlayer = 1; //determines what players turn it is if num === 1 player 1 turn ... num === 4 player 4 turn 
//if num === 0 a player tonked the round is over
var winner; //winning player in string form


//arrays of cards
allCards = [];
allCardsInDeck = [];
allPlayers = [];
discardDeck = [];
cardDrawn = [];
playerTitles = [];

class Card {
    constructor(suit, name, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
        allCardsInDeck.push(this);
        allCards.push(this);
    }
    get cardName() {
        return (this.name + " of " + this.suit);
    }//returns the card 
    get cardValue() {
        return this.value
    }//returns the card point value
}//makes the card class to make all 52 cards
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
        allPlayers.push(this);
    }
    get getHand() {
        return this.hand;
    }//returns players hand
    get playerName() {
        return this.name;
    }
    get playerScore() {
        return this.score;
    }
}//makes player 

//regular functions
function makeAllCards(){
    //(suit, name, value)
    //diamonds
    let aceDiamond = new Card('diamond', 'ace', 11);
    let twoDiamond = new Card('diamond', '2', 2);
    let threeDiamond = new Card('diamond', '3', 3);
    let fourDiamond = new Card('diamond', '4', 4);
    let fiveDiamond = new Card('diamond', '5', 5);
    let sixDiamond = new Card('diamond', '6', 6);
    let sevenDiamond = new Card('diamond', '7', 7);
    let eightDiamond = new Card('diamond', '8', 8);
    let nineDiamond = new Card('diamond', '9', 9);
    let tenDiamond = new Card('diamond', '10', 10);
    let jackDiamond = new Card('diamond', 'jack', 10);
    let queenDiamond = new Card('diamond', 'queen', 10);
    let kingDiamond = new Card('diamond', 'king', 10);
    //hearts
    let aceHeart = new Card('heart', 'ace', 11);
    let twoHeart = new Card('heart', '2', 2);
    let threeHeart = new Card('heart', '3', 3);
    let fourHeart = new Card('heart', '4', 4);
    let fiveHeart = new Card('heart', '5', 5);
    let sixHeart = new Card('heart', '6', 6);
    let sevenHeart = new Card('heart', '7', 7);
    let eightHeart = new Card('heart', '8', 8);
    let nineHeart = new Card('heart', '9', 9);
    let tenHeart = new Card('heart', '10', 10);
    let jackHeart = new Card('heart', 'jack', 10);
    let queenHeart = new Card('heart', 'queen', 10);
    let kingHeart = new Card('heart', 'king', 10);
    //spades
    let aceSpade = new Card('spade', 'ace', 11);
    let twoSpade = new Card('spade', '2', 2);
    let threeSpade = new Card('spade', '3', 3);
    let fourSpade = new Card('spade', '4', 4);
    let fiveSpade = new Card('spade', '5', 5);
    let sixSpade = new Card('spade', '6', 6);
    let sevenSpade = new Card('spade', '7', 7);
    let eightSpade = new Card('spade', '8', 8);
    let nineSpade = new Card('spade', '9', 9);
    let tenSpade = new Card('spade', '10', 10);
    let jackSpade = new Card('spade', 'jack', 10);
    let queenSpade = new Card('spade', 'queen', 10);
    let kingSpade = new Card('spade', 'king', 10);
    //clubs
    let aceClub = new Card('club', 'ace', 11);
    let twoClub = new Card('club', '2', 2);
    let threeClub = new Card('club', '3', 3);
    let fourClub = new Card('club', '4', 4);
    let fiveClub = new Card('club', '5', 5);
    let sixClub = new Card('club', '6', 6);
    let sevenClub = new Card('club', '7', 7);
    let eightClub = new Card('club', '8', 8);
    let nineClub = new Card('club', '9', 9);
    let tenClub = new Card('club', '10', 10);
    let jackClub = new Card('club', 'jack', 10);
    let queenClub = new Card('club', 'queen', 10);
    let kingClub = new Card('club', 'king', 10);
}////makes all of the cards
function drawACardToHand(player) {
    let rand = Math.floor(Math.random() * allCardsInDeck.length);//gets a random num 0-51 to index the deck
    player.hand.push(allCardsInDeck[rand]);//pushes card to player hand
    allCardsInDeck.splice(rand, 1);
}//draws a card to be used in set hand
function drawAHand(player) {
    for (var i = 0; i < 3; i++) {
        drawACardToHand(player);
    }
}//draws a players initial hand
function calcPlayerPossibleScore(player) {
    var possibleScore = 0;
    if ((player.hand[1].suit === player.hand[2].suit) && (player.hand[1].suit === player.hand[0].suit)) {
        for (var i = 0; i < 3; i++) {
            possibleScore = possibleScore + player.hand[i].value;
        }
    }//if all 3 match (3)
    else if (player.hand[0].suit === player.hand[1].suit) {
        if ((player.hand[0].value + player.hand[1].value) > player.hand[2].value) {
            possibleScore = player.hand[0].value + player.hand[1].value;
        }//checks to see if cards 0 and 1 have same suit if they do and have a greater value then card 2 then the sum is added
        else {
            possibleScore = player.hand[2].value;
        }//if the last card has a greater value then sum of others its value is made possible score
    }//calcs PS for if cards 0 and 1 are same suit (2)
    else if (player.hand[1].suit === player.hand[2].suit) {
        if ((player.hand[1].value + player.hand[2].value) > player.hand[0].value) {
            possibleScore = player.hand[1].value + player.hand[2].value;
        }//checks to see if cards 1 and 2 have same suit if they do and have a greater value then card 0 then the sum is added
        else {
            possibleScore = player.hand[0].value;
        }//if the last card has a greater value then sum of others its value is made possible score
    }//calcs PS for if cards 1 and 2 are same suit (2)
    else if (player.hand[2].suit === player.hand[0].suit) {
        if ((player.hand[2].value + player.hand[0].value) > player.hand[1].value) {
            possibleScore = player.hand[2].value + player.hand[0].value;
        }//checks to see if cards 2 and 0 have same suit if they do and have a greater value then card 2 then the sum is added
        else {
            possibleScore = player.hand[1].value;
        }//if the last card has a greater value then sum of others its value is made possible score
    }//calcs PS for if cards 2 and 0 are same suit (2)
    else {
        if (player.hand[0].value >= player.hand[1].value && player.hand[0].value >= player.hand[2].value) {
            possibleScore = player.hand[0].value;
        }//checks if card 0 is greatest or equal value to others
        else if (player.hand[1].value >= player.hand[0].value && player.hand[1].value >= player.hand[2].value) {
            possibleScore = player.hand[1].value;
        }//checks if card 1 is greatest or equal to value of others
        else if (player.hand[2].value >= player.hand[1].value && player.hand[2].value >= player.hand[0].value) {
            possibleScore = player.hand[2].value;
        }//checks if card 2 is greatest or equal to value of others
    }//if none match (1) 
    return possibleScore;
}//calculates what your score would be if the round ended immediatly using your hand 
function drawACard() {
    let rand = Math.floor(Math.random() * allCardsInDeck.length);//gets a random num 0-51 to index the deck
    cardDrawn.push(allCardsInDeck[rand]);//puts card in card drawn array from allCardsInDeck array 
    allCardsInDeck.splice(rand, 1);
}//draws a random card from deck puts it in cardDrawn
function swapACard(player, cardNum) {
    discardDeck.push(player.hand[cardNum]);//adds card from hand to discardDeck
    player.hand[cardNum] = cardDrawn[0]; //puts drawn card into hand
    cardDrawn = [];//empties cardDrawn array 
}//swaps a card from players hand pos (cardNum) with the cardDrawn array empties the cardDrawn array 
//and adds old card to discardDeck array
function makeAllPlayersTitles(numPlayers) {
    for (var i = 1; i <= numPlayers; i++) {
        let s = 'player' + i;
        playerTitles.push(s);
        //console.log(s);
    }
}//for each player inputted creates that players title to make player in the game
function makeAllPlayers(numPlayers) {
    makeAllPlayersTitles(numPlayers); //calls makeAllPlayersTitles to make names for player objects

    for (var i = 0; i < playerTitles.length; i++) {
        playerTitles[i] = new Player(playerTitles[i]);
        //console.log(playerTitles[i].name);
    }
}// uses makeAllPlayersTitles to make all players that are playing the game
function drawAllPlayersHands() {
    allPlayers.forEach((element) => {
        drawAHand(element);
    });
}//draws a hand for all players
//async functions
async function howManyPlayers() {
    let promise1 = new Promise((resolve) => {
        rl.question('How many players are there? the limit is 4 \n', players => { resolve(players) })
    })
    numPlayers = await promise1;
    if (!(numPlayers > 0 && numPlayers < 5)) {
        console.log("");
        console.log("Sorry that is an invalid response try again");
        await howManyPlayers();
    }
    //console.log("Ok so there are " + numPlayers + " players");
}//obtains and prints the number of players
async function action() {
    let actionResponse;
    let promise1 = new Promise((resolve) => {
        rl.question('What action would you like to take you can tonk or draw?\n', action1 => { resolve(action1) })
    })
    actionResponse = await promise1;
    if (!(actionResponse === 'tonk' || actionResponse === 'draw')) {
        console.log("");
        console.log("Sorry that is an invalid response try again");
        await action();
    }
    if (actionResponse === 'tonk') {
        currentPlayer = 0; //ends round
        console.log("The game is over");
        await wait3s();
        console.log("The scores are...");
        await wait3s();
        printScores();
        setWinner();
        await wait3s();
        if (winner !== 'draw') {
            console.log("The winner is " + winner);
        } else {
            console.log("It's a draw");
        }
    }
    if (actionResponse === 'draw') {
        drawACard();
        console.log("");
        await wait2s();
        displayDrawnCard();
        await whatCardToSwap();
        await wait2s();//put this in to fix changing players too early may need tuning
        if (currentPlayer !== allPlayers.length) {
            currentPlayer++;
        }// if not last player updates the current player after a turn by adding +1
        else if (currentPlayer === allPlayers.length) {
            currentPlayer = 1;
        }
        await endTurn();
    }
}//asks if you would like to tonk or draw  ***ACTION FUNCTION***
async function whatCardToSwap() {
    let card;
    let promise1 = new Promise((resolve) => {
        rl.question('Which card in your hand would you like to swap with if any? say 1, 2, 3, or none \n', num => { resolve(num) })
    })
    card = await promise1;
    swapACard(playerTitles[currentPlayer - 1], card - 1);
    if (card === 'none') {
        discardDeck.push(cardDrawn[0]); 
        cardDrawn = [];
    }//if card is not swapped puts cardDrawn in discard pile and empties cardDrawn

    displayUpdatedHand();//these show updated hand and score after a swap
}//asks what card in hand to swap with and shows updated hand and hand value
async function startRound() {
    makeAllCards();
    await howManyPlayers();
    makeAllPlayers(numPlayers);
    drawAllPlayersHands();
}//initial start setup stuff for a round
async function endTurn() {
    let end;
    await wait3s();
    let promise1 = new Promise((resolve) => {
        rl.question('Your turn is now over, type end to end your turn?\n', end1 => { resolve(end1) })
    })
    end = await promise1;   
}//moves the turn to the next player
async function wait3s() {
    let p;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Done"), 3000);
    });
    p = await promise;
}//waits 3 second
async function wait2s() {
    let p;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Done"), 2000);
    });
    p = await promise;
}//waits 2 second
async function wait1s() {
    let p;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("Done"), 1000);
    });
    p = await promise;
}//waits 1 second

//display functions
function displayPlayers() {
    console.log(allPlayers);
}//displays the games players 
function displayAllCardsInDeckLength() {
    console.log(allCardsInDeck.length);
}//displays number of cards remaining in the deck
function displayDrawnCard() {
    console.log('Card drawn is ' + cardDrawn[0].name + " of " + cardDrawn[0].suit);
}//prints the single card drawn
async function printPlayerHand(player) {
    await wait1s();
    console.log(player.name + ' your cards are...');
    console.log("");
    console.log(player.hand[0].name + " of " + player.hand[0].suit + ' (1)');
    console.log(player.hand[1].name + " of " + player.hand[1].suit + ' (2)');
    console.log(player.hand[2].name + " of " + player.hand[2].suit + ' (3)');
    console.log("");
}//prints the card in a players hand
async function printPlayerHandValue(player) {
    await wait1s();
    console.log(player.name + ' potential hand value added is ' + calcPlayerPossibleScore(player));
}//prints name and hand value
async function displayUpdatedHand() {
    console.log("");
    await printPlayerHand(playerTitles[currentPlayer - 1]);
    await printPlayerHandValue(playerTitles[currentPlayer - 1]);
}//used both printPlayerHand() and printPlayerHandValue() to show updated hand stats  ***IMPORTANT DISPLAY OF BOTH HAND AND HAND VALUE***
function displayArrayLengthInfo() {
    console.log("All cards in deck length is " + allCardsInDeck.length);
    console.log("Discard deck length is " + discardDeck.length);
    console.log("Card drawn length is " + cardDrawn.length);
}//prints length of allCardsInDeck, discardDeck, and cardDrawn
function setScores() {
    allPlayers.forEach(element => element.score = calcPlayerPossibleScore(element));
}//calculates all player scores using calcPlayerPossibelScores(playerNames)
function printScores() {
    setScores();
    allPlayers.forEach(element => console.log(element.name + " " + element.score));
}//prints all player scores
function setWinner() {
    if (allPlayers.length === 4) {
        //player 1 has the highest score 
        if ((playerTitles[0].score > playerTitles[1].score) && (playerTitles[0].score > playerTitles[2].score) && (playerTitles[0].score > playerTitles[3].score)) {
            winner = playerTitles[0].name;
        }
        //player 2 has the highest score
        else if ((playerTitles[1].score > playerTitles[0].score) && (playerTitles[1].score > playerTitles[2].score) && (playerTitles[1].score > playerTitles[3].score)) {
            winner = playerTitles[1].name;
        }
        //player 3 has the highest score
        else if ((playerTitles[2].score > playerTitles[1].score) && (playerTitles[2].score > playerTitles[3].score) && (playerTitles[2].score > playerTitles[0].score)) {
            winner = playerTitles[2].name;
        }
        //player 4 has the highest score
        else if ((playerTitles[3].score > playerTitles[1].score) && (playerTitles[3].score > playerTitles[2].score) && (playerTitles[3].score > playerTitles[0].score)) {
            winner = playerTitles[3].name;
        }
        else {
            winner = 'draw';
        }
    }//for 4 player game 
    if (allPlayers.length === 3) {
        //player 1 has the highest score
        if ((playerTitles[0].score > playerTitles[1].score) && (playerTitles[0].score > playerTitles[2].score)) {
            winner = playerTitles[0].name;
        }
        //player 2 has the highest score
        else if ((playerTitles[1].score > playerTitles[0].score) && (playerTitles[1].score > playerTitles[2].score)) {
            winner = playerTitles[1].name;
        }
        //player 3 has the highest score
        else if ((playerTitles[2].score > playerTitles[0].score) && (playerTitles[2].score > playerTitles[1].score)) {
            winner = playerTitles[2].name;
        }
        else {
            winner = 'draw';
        }
    }//for 3 player game
    if (allPlayers.length === 2) {
        //player 1 has higher score
        if (playerTitles[0].score > playerTitles[1].score) {
            winner = playerTitles[0].name;
        }
        //player two has a higher score
        else if (playerTitles[1].score > playerTitles[0].score) {
            winner = playerTitles[1].name;
        } else {
            winner = 'draw';
        }
    }//for two player game
}//declares the winner

async function main() {
    await startRound();
    while (currentPlayer !== 0) {
        //playerTurnStartAlert();
        await displayUpdatedHand();
        await action();
    }
    
    rl.close();
}//method with everything
//tester
main();

//find a way to redo questions if wrong thing is inputted (rejects);
//find a way to have it go an extra turn after a tonk is done 
//fucking changes 



