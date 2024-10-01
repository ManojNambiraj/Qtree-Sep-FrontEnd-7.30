// Arrays:

    // let arr = [10, 20, 30, 40, 50, 60];
    //            #0  #1  #2  ...........

    // console.log(arr.length);
    // console.log(arr[5]);

    // arr[3] = 400

    // console.log(typeof arr);

// Objects: --> {Key: value} pairs

// let obj = {
//     name: "ram", 
//     age: 50, 
//     dept: "IT", 
//     college: "xyz",
//     address: {
//         dNo: 2,
//         street: "abc street",
//         landmark: "water tank"
//     },
//     favColors: ["black", "red", "Green", "Yellow"]
// }

// obj.college = "ABC"

// console.log(typeof obj);

// console.log(obj.name);

// console.log(obj.address.street);

// console.log(obj.favColors[1]);

// // Array method: (map, filter, reduce ---> [MRF])

// let fruits = ["apple", "banana", "kiwi", "grapes"];

// fruits.map(() => )

// Functions:  (DRY -> Don't repeat your code)

// 1. Normal Function

// function demo() {             // Function definition
//     console.log();
// }

// demo();                      // Function call

// Parameterized Functions:

// function demo(a, b) {             // Function definition
    
//     return a * b;

//     // console.log("hello");
// }

// let result = demo(100, 2);        // Function call

// console.log(result);

// 2. Ananymous Function ---> Unnamed Function

// let demo = function(a){
//     console.log("hello", a);
// }

// demo(50)

// 3. Arrow Function --> ES6

// let arr = (a, b) => a * b;

// console.log(arr(100, 5));

// 4. IIFE Function:  --> (Immediatly invoked function Expression)

(() => {
    console.log("I am IIFE");
})()