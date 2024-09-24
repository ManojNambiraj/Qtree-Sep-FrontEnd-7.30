// JS ----> Functionalities

// 1. Built - in   functions

// alert("hi");

// console.log("hello");

// 2. User defined functions

// Datatypes:

// a = 10; // a = 10.5;   /// ---> number
// a = "hi";  /// ---> String
// a = true;   /// ---> false (Boolean)
// var a;      /// ---> undefined
// a = null;

// console.log(typeof a, a);


// Variables:

// a = 23;
// Age = 23;

// console.log(Age);

// Scoping // Hoisting // Variable Declarations

    // ES  -> ECMA Script

    // ES5 -> Old (2015)

        // var

        // var a = 1000;
        
        // var a = 30;

        // console.log(a);
        
    // ES6 -> Latest

        // let
        
        // let a1 = 5000;

        // a1 = 100;

        // console.log(a1);
        
        // const   ---->   Constant

        // const c = 1000;

        // console.log(c);

    // // Static Programming  -> c / c++ / JAVA

    // int a = 100;

    // // Dynamic Programming  -> Scripting Languages -> JS, Python

    // a = 100;
    // b = "hello";
        
// Types of Variable Declaration:

// 1. Global variables (or) Global Scope ----> (var)

// {

//     var a = 100;

//     console.log("inside: ", a);

// }

// console.log("Outside: ", a);

// 2. Local variables (or) Block scope ----> (let, const)

// {

//     let a = 100;

//     const a = 100;

//     console.log("inside: ", a);

// }

// console.log("Outside: ", a);

// Example:

// let a = 50;

// {
//     {
//         {
//             a = 3;
//             {
//                 {
//                     {
//                         {
//                             console.log(a);
//                         }
//                     }
//                 }
//             }
//             console.log(a);
//         }
//     }
//     console.log(a)
// }


