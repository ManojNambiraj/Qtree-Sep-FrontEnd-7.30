// Operators:

// 1. Arithmetic OP    // (+, -, *, /, **, %, ++, --)

// let a = 10;
// let b = 7;
// let result;

// result = a + b;
// result = a - b;
// result = a * b;
// result = a / b;
// result = a ** b;
// result = a % b;
// result = ++a
// result = --a

// console.log(result);



// 2. Assignment OP   // (=, +=, -=, *=, /=, %=, **=)

// let a = 10;

// a += 2;   //  a = a + 2;
// a -= 2;   //  a = a - 2;
// a *= 2;   //  a = a * 2;
// a /= 2;   //  a = a / 2;
// a %= 2;   //  a = a % 2;
// a **= 2;  //  a = a ** 2;

// console.log(a);

// 3. Comparision OP  // (==, ===, !=, !==, >, >=, <, <=)  // Boolean

// let a = 10;
// let result;

// result = (a == 10);
// result = (a === 10);
// result = (a != 10);
// result = (a !== 10);
// result = (a > 10);
// result = (a >= 10);
// result = (a < 10);
// result = (a <= 10);

// console.log(result);

// 4. Logical OP  // (&&, ||, !)

    // &&

    // (True)  && (True)   ---> True
    // (True)  && (False)  ---> False
    // (False) && (True)   ---> False
    // (False) && (False)  ---> False

    // let a = 10;
    // let result;

    // result = (a == 10) && (a > 5)

    // console.log(result);

    // ||

    // (True)  || (True)   ---> True
    // (True)  || (False)  ---> True
    // (False) || (True)   ---> True
    // (False) || (False)  ---> False

    // let a = 10;
    // let result;

    // result = (a == 10) || (a < 5)

    // console.log(result);

    // !

    // (True)  ---> False

    // let a = 10;
    // let result;

    // result = (a == 10) || (a > 5)

    // console.log(!result);


// 5. Bitwise OP  // (&, |, ~, ^, <<, >>)

    // &

    // (1) & (1) ---> 1
    // (1) & (0) ---> 0
    // (0) & (1) ---> 0
    // (0) & (0) ---> 0

    // let a = 5;
    // let b = 7;
    // let result;

    // result = a & b;

    // console.log(result);

    // // Explanation:
    
    // // (5) ----> 0101
    // // (7) ----> 0111
    // // --------------
    // //           0101  -> (5)

    // |

    // (1) | (1) ---> 1
    // (1) | (0) ---> 1
    // (0) | (1) ---> 1
    // (0) | (0) ---> 0

    // let a = 5;
    // let b = 7;
    // let result;

    // result = a | b;

    // console.log(result);

    // Explanation:
    
    // (5) ----> 0101
    // (7) ----> 0111
    // --------------
    //           0111  -> (7)

    // ~       (-8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7.....)

    // let a = 5;
    // let b = 7;
    // let result;

    // result = a | b;

    // console.log(~result);

    // ^

    // (1) ^ (1) ---> 0
    // (1) ^ (0) ---> 1
    // (0) ^ (1) ---> 1
    // (0) ^ (0) ---> 0

    // let a = 5;
    // let b = 7;
    // let result;

    // result = a ^ b;

    // console.log(result);

    // Explanation:
    
    // (5) ----> 0101
    // (7) ----> 0111
    // --------------
    //           0010  -> ()

    // <<

    // let a = 3

    // let result = a << 2;

    // console.log(result);

    // // Explanation:

    // // (3) --> 00000011

    // // (1) --> 00000110
    // // (2) --> 00001100   -> 12

    // >>

    // let a = 16

    // let result = a >> 2;

    // console.log(result);

    // // Explanation:

    // // (16) --> 00010000

    // // (1)  --> 00001000
    // // (2)  --> 00000100  --> 4
    

// 6. Ternary OP

//     // (?)

//     let age = 16;

//     let result = (age > 18) ? "Your Eligible for voting" : "Not Eligible";

//     console.log(result);
    

// // 7. Type OP

// console.log(typeof result);
