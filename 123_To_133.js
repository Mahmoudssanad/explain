// // One Assignments
// let setOfNumber = new Set().add(10);
// setOfNumber.add(20).add(setOfNumber.size);

// console.log(setOfNumber);
// console.log(Array.from(setOfNumber).pop());

// // Two Assignments
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// console.log(Array.from(new Set(myFriends)).sort());

// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// // Three Assignments

// /*
//  Map في ال Object الا موجوده في ال values و ال  keys الفكره هنا ان عشان احط ال 
// Object.entries(Objectبنحط هنا اسم ال ) بنستخدم 
// */
// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };
  
// let myMap = new Map(Object.entries(myInfo));
// console.log(myMap);
// console.log(myMap.size);
// if(myMap.has("role")){
//     console.log(true);
// };

// Four Assignments
let theNumber = 100020003000;
let y = new Set(String(theNumber));
y.delete("0");
let r = Array.from(y).map((e) => +e);
console.log(r.join(""));
// One Line
console.log(+[...new Set(theNumber.toString())].sort().slice(1).join(""));
// console.log(new Set(...String(theNumber)));

// Five Assignments

let theName = "Elzero";

// One
let n = [...theName];
console.log(n)

// Two
console.log(Array.from(theName));

// Three
console.log([...new Set(theName)]);


// Four
function x (){
    return Array.from(arguments);
}
console.log(x(...new Set (theName)));

// Five
console.log(theName.split(""));

// Set => بترجع مصفوفه كل حرف في خانه 
console.log(new Set (theName));

// Seven Assignments 

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// One
let allArray = [...numsOne , ...numsTwo];
console.log(allArray);

// Two
console.log(numsOne.concat(numsTwo));

// Three
numsOne.push(...numsTwo);
console.log(numsOne);