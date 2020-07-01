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
let choosenDoor;
let correctDoor;
let wrongDoors = [];


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

//run method
function main() {
    makeAllDoors();
    assignDoors();
    chooseADoor();
    //displayChoosenDoor();
    //displayCorrectDoor();
    displayWrongDoors();
     

    displayDoors();
}//main method

//actually running
main();