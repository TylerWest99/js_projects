// JavaScript source code
//Monty Hall problem
//3 doors which 1 has a car while the others have 2 goats 

class Door {
    constructor(name, prize) {
        this.name = name;
        this.prize = prize;
        allDoors.push(this);
    }
}//make door class and pushes made doors to allDoors array

//arrays and vars

let allDoors = [];
let allDoorsInPlay = [];
//reset
let choosenDoor;
let correctDoor;
let wrongDoors = [];
//permanent
let success = 0;
let failure = 0;
let successPercentage;
let counter = 0;



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
    allDoors[carDoorNum].prize = 'car';
    correctDoor = allDoors[carDoorNum];
    for (var i = 0; i < 3; i++) {
        if (allDoors[i].prize === null) {
            allDoors[i].prize = 'goat';
            wrongDoors.push(allDoors[i]);
        }
    }
}//assigns the doors the car and goats
function chooseADoor() {
    let randomNum = randomNum0to2();
    choosenDoor = allDoors[randomNum];
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
//special functions
function reset() {
    for (var i = 0; i < 3; i++) {
        allDoors[i].prize = null;
        choosenDoor = null;
        correctDoor = null;
        wrongDoors = [];
    }
}//resets everything to go agane
function mainLoop() {
    allDoorsInPlayFunc();
    assignDoors();
    chooseADoor();
    wasDoorChoosenCorrectly();
    displayStats();
    console.log(allDoorsInPlay);
    reset();
}//does the main loop through and awards a + to success or failure 


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
    console.log("The success percentage is " + successPercentage);
}//displays the success percentage
function displayCounter() {
    console.log(counter);
}//displays counter
function displayStats() {
    displayChoosenDoor();
    displayCorrectDoor();
    displayDoors();
}//some display functions

//run method
function main() {
    makeAllDoors();

    for (var i = 0; i < 1; i++) {
        mainLoop();
        counter++;
    }
    successPercentage = success / counter;
    displayCounter();
    displaySuccessPercentage();


}//main method

//actually running
main();