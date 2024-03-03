//        one assingment

let myNumbers = [1, 2, 3, 4, 5];

let [r,,,,s] = myNumbers;
console.log(r * s); // 5

//          Two assingment

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let [a, b, c, [d, e, [f, g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//          Three assingment

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
let arr4 = [arr1[0], arr2[0], arr3[0]];
let [q,w,t] = arr4;

console.log(`My Best Friends: ${q}, ${w}, ${t}`);
// My Best Friends: Shady, Mahmoud, Ahmed

//          Four assingment

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  const {age: u, working: i, country: o,hobbies:[h1,,h3]} = member;
  if(w === false){
    w = "";
  }
  console.log(`My Age Is ${u} And Iam ${i ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${o}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

  
