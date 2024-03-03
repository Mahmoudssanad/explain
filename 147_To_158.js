//       One Assignment
class Car{
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run = function () {
        return ` Car Is Running Now`;
    }
    stop = function () {
        return `Car Is Stopped`;
    }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("MAR", 2024, 4000000);
let carThree = new Car("KIA", 2023, 1000000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());

//       Two Assignment
class Phone {
    constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
    }
}

class Tablet extends Phone{
    constructor (name, serial, price, size) {
        super(name, serial, price);
        this.s = size || "Unknown";
    }
    fullDetails = function(){
        return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`;
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//       Three Assignment 
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = card;
    }
    cerditCard(){
        // مهم جدا جدا جدا 
        // .join("-") => - معنها ان كل اربع ارقام هيحط 
        return this.#c.toString().match(/\d{4}/g).join("-");
    } 
    // get => محطتش اقواس ليها يعني property ك method خلتني اعامل ال 
    get showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${this.cerditCard()}`;
    }
}

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
console.log(userTwo.showData);
console.log(userThree.showData);

//       Four Assignment

String.prototype.addLove = function(name){
    return `I Love ${this} Web School`;
};

let myStr = "Elzero";
console.log(myStr.addLove());

//       Five Assignment
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

Object.defineProperties(myObj, {
    score: {
        writable: false,
    },
    id: {
        enumerable: false,
    },
    country: {
        enumerable: false,
        configurable : true,
    }
})

myObj.score = 500;
delete myObj.country;
for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);