// let fruits = ["apple", "banana", "orange", "kiwi", "grapes"]

// console.log(fruits[1]);

// Destructring: (array / object)

// Array:

// const [a, b, o, k, g] = fruits

// console.log(k);
// console.log(g);
// console.log(a);

// Object:

// const obj = {
//     name: "raj",
//     age: 20,
//     dept: "IT",
//     college: "abc",
//     demo: function(a, b){
//         console.log(a + b);
//     }
// }

// const { name, age, dept, college, demo } = obj;

// console.log(obj.dept);
// console.log(obj.age);
// console.log(obj.college);
// demo(10, 5)

// DOM: (Document Object Model)

let res = document.getElementById("demo");

// console.log(res);


// res.innerText = "Hello"
// res.innerHTML = "<i>World</i>"

let res1 = document.getElementsByClassName("sample")

console.log(res1);


res1[0].innerText = "hi"
res1[1].innerText = "World"


// C R U D -> CREATE READ UPDATE DELETE