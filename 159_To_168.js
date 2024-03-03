// let dateNow = new Date();
// let birthday = new Date("8 30 2004");
// let diff = dateNow - birthday;


// let second = diff / 1000; 
// let minutes = second / 60;
// let hours = minutes / 60;
// let days = hours / 24;
// let months = days / 30;
// let years = months / 12;

// console.log(`${second.toFixed()} Seconds`);
// console.log(`${minutes.toFixed()} Minutes`);
// console.log(`${hours.toFixed()} Hours`);
// console.log(`${days.toFixed()} Days`);
// console.log(`${months.toFixed()} Months`);
// console.log(`${years.toFixed()} Years`);

// //   Two Assignment 

// let date = new Date;
// date.setTime(1000);
// date.setHours(0);
// date.setFullYear(1980);
// console.log(date);

// //    Three Assignment 

// let dete = new Date();
// dete.setDate(0);
// // dete.setHours(1);
// console.log(dete);

// console.log(`Previous Month Is ${dete.getMonth()} And Last Day Is ${dete.getDate(0)}`);

//         Four Assignment
// let birthday0 = new Date("8 30 2004");
// let birthday1 = new Date("2004 8 30");
// let birthday2 = new Date(2004, 7, 30);
// console.log(birthday0);
// console.log(birthday1);
// console.log(birthday2);


//         Five Assignment
// let t0 = performance.now();
// for(let i = 1;i <= 9999;i++){
//     console.log(i);
// }
// let t1 = performance.now();

// console.log(`Loop Took ${(t1 - t0).toFixed()} Milliseconds.`);

// function* gen (){
//     index = 14;
//     while(true){
//         console.log(index);
//         yield index++;
//     }
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

//     Seven Assignment 
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}
let x = new Set(genNumbers());
function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}
let y = new Set(genLetters());

function* genAll(){
    yield* x;
    yield* y;
    
}

let generator = genAll();
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

