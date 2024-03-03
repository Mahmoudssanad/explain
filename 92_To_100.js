// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let div = document.querySelector(".result");

// input.onkeyup = function(){
//     div.innerHTML = `{${input.value}} USD Dollar = {${input.value *  15.6}} Egyptian Pound`;
// }

// // Assignment 4
// let div1 = document.querySelector(".one");
// let div2 = document.querySelector(".two");

// div1.innerHTML = div2.innerHTML;

// div2.innerHTML = div2.className.charAt(0).toUpperCase()+div2.className.slice(1);

// div1.setAttribute("title",div1.className);
// div2.setAttribute("title",div2.className);

let divEv = document.querySelector("div");
divEv.onclick = function(){
    console.log(`This Is ${divEv.tagName}`)
}
let spanEv = document.querySelector("span");
spanEv.onclick = function(){
    console.log(`This Is ${spanEv.tagName}`)
}
let pEv = document.querySelector("p");
pEv.onclick = function(){
    console.log(`This Is ${pEv.tagName}`)
}
let articleEv = document.querySelector("article");
articleEv.onclick = function(){
    console.log(`This Is ${articleEv.tagName}`)
}
let sectionEv = document.querySelector("section");
sectionEv.onclick = function(){
    console.log(`This Is ${sectionEv.tagName.toLowerCase}`)
}
