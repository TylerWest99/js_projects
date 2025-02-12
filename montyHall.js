// JavaScript source code
//Monty Hall problem
//3 doors which 1 has a car while the others have 2 goats 
//***FINAL VERSION***

class Door {
    constructor(name, prize) {
        this.name = name;
        this.prize = prize;
        allDoors.push(this);
    }
}//make door class and pushes made doors to allDoors array

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//arrays and vars
let allDoors = [];
let allDoorsInPlay = [];
//reset
let choosenDoor;
let correctDoor;
//let wrongDoors = [];
let removedDoor;
//permanent
let success = 0;
let failure = 0;
let successPercentage;
let counter = 0;
let mainLoopNum;//keeps track of switch door on or off (1 is on 0 is off)



//functions
function makeAllDoors() {
    let door1 = new Door("door1", null);
    let door2 = new Door("door2", null);
    let door3 = new Door("door3", null);

}//makes all 3 doors and leaves prize blank
function randomNum0to2() {
    let rand = Math.floor(Math.random() * 3);//gets a random num 0-51 to index the deck
    return rand;
}//makes and returns random num 0 to 2
function assignDoors() {
    let carDoorNum = randomNum0to2();
    allDoorsInPlay[carDoorNum].prize = 'car';
    correctDoor = allDoorsInPlay[carDoorNum];
    for (var i = 0; i < 3; i++) {
        if (allDoorsInPlay[i].prize === null) {
            allDoorsInPlay[i].prize = 'goat';
           // wrongDoors.push(allDoorsInPlay[i]);
        }
    }
}//assigns the doors the car and goats
function chooseADoor() {
    let randomNum = randomNum0to2();
    choosenDoor = allDoorsInPlay[randomNum];
}//randomly chooses a door for a player of the three assigns it to choosenDoor
function wasDoorChoosenCorrectly() {
    if (choosenDoor === correctDoor) {
        //console.log("success");
        success++;
    } else {
        //console.log("failure");
        failure++;
    }
}//adds +1 to success or failures depending on if the choosen door was the correct door
function allDoorsInPlayFunc() {
    allDoorsInPlay = allDoors;
}//allDoorsInPlay = allDoors
function removeADoor() {
    let randNum = randomNum0to2();
    if (allDoorsInPlay[randNum] === correctDoor) {
        removeADoor();
    } 
    else if (allDoorsInPlay[randNum] === choosenDoor) {
        removeADoor();
    }
    else {
        removedDoor = allDoorsInPlay[randNum];
        allDoorsInPlay.splice(randNum, 1); //removes the door 
    }
}//removes a door from allDoorsInPlay
function swap() {
    let originalChoosenDoor;
    let otherDoor;
    for (var i = 0; i < allDoorsInPlay.length; i++) {
        if(allDoorsInPlay[i] !== (choosenDoor)) {
            otherDoor = allDoorsInPlay[i];//if it does not match the choosenDoor 
        }
    }
    choosenDoor = otherDoor; //***CRITICAL*** this switches the door off of the original choosenDoor to the other door
}//swaps your choosenDoor with the door you didn't choose
//display functions
function displayDoors() {
    console.log(allDoors);
}//displays doors contents
function displayChoosenDoor() {
    console.log("choosen door is " + choosenDoor.name);
}//displays the door choosen by the random door chooser
function displayCorrectDoor() {
    console.log("correct door is " + correctDoor.name);
}//shows door with car
function displayWrongDoors() {
    console.log("wrong doors are " + wrongDoors[0].name + " and " + wrongDoors[1].name);
}//shows incorrect doors
function displaySuccessPercentage() {
    console.log("The success percentage is " + successPercentage * 100 + '%');
}//displays the success percentage
function displayCounter() {
    console.log("After running the test " + counter + " times");
}//displays counter
function displayStats() {
    displayChoosenDoor();
    displayCorrectDoor();
    displayDoors();
}//some display functions
//special functions
function reset() {
    //add back in the removed door
    allDoorsInPlay.push(removedDoor);
    for (var i = 0; i < 3; i++) {
        allDoorsInPlay[i].prize = null;
        choosenDoor = null;
        correctDoor = null;
        wrongDoors = [];
    }
}//resets everything to go agane
function mainLoopWithSwitch() {
    allDoorsInPlayFunc();//makes another array for allDoorsInPlay
    assignDoors();//assigns all three doors a value either car or goat
    chooseADoor();//randomly chooses 1 of 3 doors
    removeADoor();//removes a door not choosen and not with car
    swap();
    wasDoorChoosenCorrectly();//tallies success and failures
    reset();
}//does the main loop through and awards a + to success or failure 
function mainLoopNoSwitch() {
    allDoorsInPlayFunc();//makes another array for allDoorsInPlay
    assignDoors();//assigns all three doors a value either car or goat
    chooseADoor();//randomly chooses 1 of 3 doors
    wasDoorChoosenCorrectly();//tallies success and failures
    reset();
}//does the main loop through and awards a + to success or failure 
async function chooseMainLoop() {
    let result;
    let promise1 = new Promise((resolve) => {
        rl.question('Would you like to switch doors? Type yes or no \n', result1 => { resolve(result1) })
    })
    result = await promise1;
    if (result === 'yes') {
        mainLoopNum = 1;
    }
    else if (result === 'no') {
        mainLoopNum = 0;
    } else {
        await chooseMainLoop();
    }
}
//run method
async function main() {
    makeAllDoors();
    await chooseMainLoop();
    for (var i = 0; i < 1000000; i++) {
        //one of the two main methods must allways be commented out
        //main loop type goes here
        if (mainLoopNum === 1) {
            mainLoopWithSwitch();
        }
        if (mainLoopNum === 0) {
            mainLoopNoSwitch();
        }
        counter++;
    }
    successPercentage = success / counter;
    displayCounter();
    displaySuccessPercentage();

    rl.close();
}//main method

//actually running (Version 1.0.0)
main();

//final notes
//this proves that by switching the door at the end your success rate goes from 33% to 66%