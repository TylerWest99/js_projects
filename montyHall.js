// JavaScript source code
//Monty Hall problem
//3 doors which 1 has a car while the others have 2 goats 

class Door {
    constructor(number, prize) {
        this.number = number;
        this.prize = prize;
    }
    get prize() {
        return this.prize;
    }
    get number() {
        return this.number;
    }
}

//arrays
