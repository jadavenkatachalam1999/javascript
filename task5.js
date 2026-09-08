
// ---------------------------------------
// Variables & Data Types (Questions 1-8)
// ----------------------------------------


 /* Q1) What is the difference between var, let, and const?

         
                   var                        let                            const         
                                

        - It can be re-declared.       - It cannot be re-declared.       - It cannot be re-declared
        - It can be reassigned.        - It can be reassigned.           - It cannot be reassigned
        - It is Function scope         - It is Block scope               - It is Block scope

        Example:                         Example:                          Example:
           
          var a = 10;                          let b = 10;                      const c = 10;
            a = 20    // Allowed                 b = 20;   //  Allowed            c = 20;   // Error


    */ 








 // Q2) Can you re-declare a variable with var? What about let and const?


 //       Yes, var allows re-declaration.But let and const cannot be re-declared in the same scope.

                var a = 15;
                var a = 25;       //  Allowed

                let b = 15;
                b = 25;           //  Allowed
                //let b = 30;       //  Not allowed

                const c = 10;
                // c = 20;         //  Not allowed
                 //const c = 30;   //  Not allowed
    






    

// Q3) What is the output of this code?
    //  javascript


        var x = 5;
        let y = 10;
        const z = 15;

        x = 20;
        y = 25;
        // z = 30;  // Error: Assignment to constant variable.

        console.log(x, y, z);

    // Output: TypeError: Assignment to constant variable.
    // Because z is a const variable, z = 30 causes an error, so console.log() is never reached.






/* Q4) What is the difference between declaring and initializing a variable?


   // Declaration   -  It means Creating a variable without giving it a value.
  // Initialization -  It means Giving a value to a variable.

          
    
            let age;       // Declaration
            age = 25;      // Initialization
*/







// Q5) What will be the output?

     let a5;
    console.log(a5);

    //Output: undefined Because a5 is declared but no value is assigned.









// Q6) What is hoisting? Give an example.

   // Hoisting is JavaScript's behavior of processing declarations before executing the code.

// Example: 
            console.log(a);  // undefined
             var a = 10;

                

                    
             var a;
            console.log(a);
            a = 10;

            // let and const are also hoisted, but they   cannot be accessed before declaration because of the Temporal dead zone(TDZ).
            // var is hoisted and initialized with undefined.







/* Q7) What is the difference between null and undefined?


                     undefined                                                       null

      - A  variable has been declared but has no value.                - we intentionally give a variable an empty value.

                let age;                                                        let age1 = null;
                console.log(age);                                               console.log(age1);

                Output: undefined                                               output: null


*/







// Q8) What will be the output?

    console.log(typeof null);     // object
    console.log(typeof undefined); // undefined
    console.log(typeof []);         // object
    console.log(typeof {});         // object

       

// typeof null returning "object" is a historical JavaScript behavior.








// ----------------------
 // Operators — Q9 to Q14
 // -----------------------


// Q9) What is the difference between == and ===?

   //     ==  -> compares values after type conversion.
    //    === -> compares value and data type.

           console.log(6 == "6");  // true
           console.log(6 === "6"); // false







/* Q10) What is the difference between ++i and i++?

                ++i                                                                       i++                                                                

        - pre-increment. First increases the value, then uses it.              post-increment. First uses the value, then increases it.

                let i = 10 ;                                                       let j = 10;
                console.log(++i);  // 11                                           console.log(j++); // 10
                console.log(i);     // 11                                           console.log(j);  // 11




*/







// Q11) What will be the output?

let x11 = 10;
let y1 = "5";

console.log(x11 + y1); // 105
console.log(x11 - y1); // 5
console.log(x11 * y1); // 50
console.log(x11 / y1); // 2

// + with a string performs string concatenation.
// -, *, and / convert the string to a number.









// Q12) What are logical operators? Explain with examples.

   //  Logical operators are used to combine or reverse conditions.There are three main logical operators:



        // 1. AND && -> Both conditions must be true

                console.log(5 > 3 && 10 > 5); // true


       // 2. OR || -> At least one condition must be true.

                console.log(5 > 10 || 10 > 5); // true


       // 3. NOT !  ->  Reverses true/false

                console.log(!(5 > 3)); // false

                








// Q13) What will be the output?

console.log(5 > 3 && 10 > 5); // true
console.log(5 > 10 || 10 > 5); // true
console.log(!(5 > 3));         // false









// Q14) What is the ternary operator? Give an example.

   //  ternary operator :  It  is a short way of writing if-else.

     //           Syntax: condition ? trueValue : falseValue;
                        
      //  Example:

                let age1 = 20;

                let result1 = age1 >= 18 ? "Eligible to vote" : "Not eligible";

                console.log(result1); // Eligible to vote

                







// -----------------------------
// Type Casting — Q15 to Q17
// -----------------------------


// Q15) What is the difference between implicit and explicit type casting?

        // Implicit type casting -> JavaScript automatically converts the type.

                let a15 = "15";
                let b15 = 5;

                console.log(a15 - b15); // 10



       //  Explicit type casting -> We manually convert the type.

                let a2 = "15";

                console.log(Number(a2)); // 15








// Q16) What will be the output?

console.log(Number("123"));        // 123
console.log(Number("hello"));      // NaN
console.log(Number(true));         // 1
console.log(Number(false));        // 0
console.log(Boolean(0));           // false
console.log(Boolean("hello"));      //true







// Q17) What is NaN? Give an example.

      //  NaN   -> "Not a Number". It occurs when JavaScript tries to perform an invalid numeric conversion/calculation.

            // Example:

                let a17 = Number("hello");

                console.log(a17); // NaN

                






// ------------------------------------
 // Conditional Statements — Q18 to Q21
 // -----------------------------------


// Q18) What is the difference between if-else and switch?


       // if -> It is used to make a decision based on a condition.

            let marks1 = 35;

            if (marks1 >= 40) {
                console.log("Pass");
            } else {
                console.log("Fail");
            }



       // switch ->  is used when you have multiple fixed choices.

                    let day = 2;

                    switch (day) {
                        case 1:
                            console.log("Monday");
                            break;

                        case 2:
                            console.log("Tuesday");
                            break;

                        case 3:
                            console.log("Wednesday");
                            break;

                        default:
                            console.log("Invalid day");
                    }









// Q19) What will be the output?

                let age = 20;

                if(age >= 18) {
                    console.log("Adult");
                } else {
                    console.log("Minor");    
                }


        // output : Adult








// Q20) What is nested if? Give an example.

    // nested if  -> means An if statement inside another if statement .

       //  Example:

               let marks = 85;

                if (marks >= 40) {
                    console.log("Student passed");  // Student passed

                    if (marks >= 80) {
                        console.log("Excellent grade"); // Excellent grade
                    }
                }










// Q21) Write a program to check if a number is even or odd using ternary operator.

                let number = 8;

                let result2 = number % 2 === 0 ? "Even" : "Odd";

                console.log(result2);   // Even








// -------------------
 // Loops — Q22 to Q25
 // ------------------


//Q22) What is the difference between while and do-while?

        // while -> checks the condition before executing.

                let i1 = 10;

                while (i1 < 5) {
                    console.log(i1);
                }

                // Nothing is printed because the condition is false.

        // do-while ->  executes the code at least once, then checks the condition.

                let i = 10;

                do {
                    console.log(i);
                } while (i < 5);

                // Output:
                // 10









// Q23) What will be the output?

            for(let i = 1; i <= 5; i++) {
                console.log(i);  //1 2 3 4 5
            }

    

            





// Q24) What is the difference between for-of and for-in?

       //  for-of -> gives you the values of an array

            let arr4= ["A", "B", "C"];

            for (let value of arr4) {
                console.log(value);   // A B C
                                         
                                         

            }



         // for-in -> gives indexes/keys.

             let arr5 = ["A", "B", "C"];

             for (let index in arr5) {
              console.log(index);       // 0  1  2
             }










// Q25) Write a program to find sum of numbers from 1 to 100.

                    let sum = 0;

                    for (let i = 1; i <= 100; i++) {
                        sum = sum + i;
                    }

                    console.log(sum);  // 5050








// --------------------
 // Arrays — Q26 to Q27
 // --------------------


// Q26) What is the difference between slice and splice?

           //  slice() → extracts a portion of an array without changing the original array.

            let arr2 = [1, 2, 3, 4];

            let result = arr2.slice(1, 3);

            console.log(result); // [2, 3]
            console.log(arr2);   // [1, 2, 3, 4]


            // splice() → adds/removes elements and changes the original array.

            let arr = [1, 2, 3, 4];

            arr.splice(1, 2);

            console.log(arr); // [1, 4]









// Q27) What will be the output?

                let arr3 = [1, 2, 3];

                arr3.push(4);
                arr3.pop();
                arr3.unshift(0);
                arr3.shift();

                console.log(arr3); //  [1, 2, 3]


            //   Initial array - [1, 2, 3]
            //   push(4) - Adds an element to the end of an array.
            //   arr3.push(4);            // [1, 2, 3, 4]

            //   pop() - Removes an element from the end of an array.     
            //    arr3.pop();            // [1, 2, 3]

            //   unshift(0) - Adds an element to the first of an array.
            //    arr3.unshift(0);       // [0, 1, 2, 3 ]

            //   shift() - Removes an element from the first of an array.
            //   arr3.shift();             // [1, 2,3]

            //   final output :
            //   [1, 2, 3]
















// -----------------------
//  Functions — Q28 to Q30
 // ----------------------


// Q28) What is the difference between function declaration and function expression?

  //  Function declaration: It defines a function using the function keyword and gives the function a name.

            function greet1() {
                console.log("Hi every one");
            }
            greet1();


    // Function expression: It stores a function inside a variable.

            let greet2 = function() {
             console.log("Hi every one");
            };
            greet2();









// Q29) What is an arrow function? Give an example.

       //  arrow function : Means is a shorter way to write a function.


                let add1= (a, b) => {
                    return a + b;
                };
                console.log(add1(10, 20)); // 30

                // Short form:

                let add2 = (a, b) => a + b;









                
// Q30) What will be the output?

        function greet() {
            return "Hello";
        }

        let message = greet();

        console.log(message); // output : Hello


    // greet() returns "Hello" -> That "Hello" value is stored in message
    // let message = "Hello"; then  console.log(message); prints -> Hello



       








