
// Task 1 — Variables
{
var name = "Venkat";
let age = 27;
const city = "Hyderabad";
const college = "NBKR College";

// Requirements:
// Print all values
console.log(name);
console.log(age);
console.log(city);
console.log(college);

// Change the var value.
name = "Vinod";
console.log(name);

// Change the let value.
age = 23;
console.log(age);

// Try changing the const value.
// city = "Mumbai";   // Error

// Try redeclaring each variable and observe what happens.
// Redeclare var
var name = "Subbu";
console.log(name);

// Redeclare let
// let age = 35;       // Error

// Redeclare const
// const college = "MCR College";  // Error

}






// Task 2 — Printing Statements:

// console.log()
console.log("Hello Venkat");

// alert()
alert("Welcome to My Home");

// confirm()
confirm("Did you learn JavaScript?");

// prompt()
let userName = prompt("What is your name?");
console.log(userName);

// document.writeln()
document.writeln("Hello from JavaScript");






// Task 3 — User Details
{
let name = prompt("Enter your name");
let age = prompt("Enter your age");
let city = prompt("Enter your city");
let qualification = prompt("Enter your qualification");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Qualification:", qualification);
}







// Data Type Tasks
// Task 4 — Find Data Types

let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f;
let g = null;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);







// Task 5 — Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]);

console.log("Second student:", students[1]);

console.log("Last student:", students[students.length - 1]);

console.log("Total students:", students.length);







// Task 6 — Employee Object

let employee = {
    name: "Venkat",
    age: 27,
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript","Reactjs"],
    isWorking: true,
    qualification: ["BTech", "MTech"]
};

console.log("Employee name:", employee.name);

console.log("Age:", employee.age);

console.log("Role:", employee.role);

console.log("First skill:", employee.skills[0]);

console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]);

console.log("Working status:", employee.isWorking);








// Arithmetic Operator Tasks
// Task 7 — Calculator
{
let a = 20;
let b = 5;

console.log("Addition:", a + b);

console.log("Subtraction:", a - b);

console.log("Multiplication:", a * b);

console.log("Division:", a / b);

console.log("Modulus:", a % b);

console.log("Exponentiation:", a ** b);
}









// Task 8 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;
let total = shirt + pant + shoes + bag;
console.log("Total price:", total);









// Task 9 — Increment & Decrement

// A — Post Increment
{
let a = 10;
let b = a++;
console.log(a);
console.log(b);
}




// B — Pre Increment
{
let a = 10;
let b = ++a;
console.log(a);
console.log(b);
}




// C — Post Decrement
{
let a = 10;
let b = a--;
console.log(a);
console.log(b);
}




// D — Pre Decrement
{
let a = 10;
let b = --a;
console.log(a);
console.log(b);
}






 // Assignment Operator Tasks
 // Task 10

 // +=
 {
let num = 10;
num += 5;
console.log(num);
 }




// -=
{
let num = 10;
num -= 3;
console.log(num);
}




// *=
{
let num = 10;
num *= 2;
console.log(num);
}





// /=
{
let num = 10;
num /= 4;
console.log(num);
}





// %=
{

let num = 10;
num %= 3;
console.log(num);
}





// **=
{
let num = 10;
num **= 2;
console.log(num);
}







 // Comparison Operator Tasks
 // Task 11 — Find Output
 
console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(10 <= 9);      // false

console.log(5 == "5");     // true
console.log(5 === "5");    // false

console.log(10 != "10");   // false
console.log(10 !== "10");  // true
 







// Logical Operator Tasks
// Task 12 — AND

console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false








// Task 13 — OR

console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false







// Task 14 — NOT

console.log(!true);       // false
console.log(!false);      // true
console.log(!(5 > 10));   // true
console.log(!(10 > 5));   // false







// Task 15 — Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);

     // true && false || false
    // false || false   = false

console.log(10 > 5 && 8 < 12 || 4 === "4");

     // true && true || false
      // rue || false    = true

console.log(7 === 7 && 10 != "10" || 5 >= 5);


      // true    && false || true
       // false || true     = true

console.log(15 < 10 || 20 > 15 && 5 == "5");

        // false   || true  &&  true 
         // true && true     = true









// Ternary Operator Tasks
// Task 16 — Voting
{
let age = 20;
let result = age >= 18 ? "Eligible to vote" : "Not eligible";
console.log(result);
}








// Task 17 — Password

let password = true;
let result = password ? "Login successful" : "Wrong password";
console.log(result);








// Concatenation & Template String
// Task 18 — User Introduction

    // 1.using +
    {
        let name = "Venkat";
        let age = 27;
        let city = "Hyderabad";
        console.log( "My name is " + name + ". I am " + age + " years old. I live in " + city + ".");
    }
      
    

    // 2.Using template literals `${}`
    {
        let name = "Venkat";
        let age = 27;
        let city = "Hyderabad";
        console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`);
    }







// Type Casting Tasks
// Task 19 — String Conversion

console.log(String(100), typeof String(100));

console.log(String(true), typeof String(true));

console.log(String(undefined), typeof String(undefined));

console.log(String(null), typeof String(null));

console.log(String([1, 2]), typeof String([1, 2]));








// Task 20 — Number Conversion

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));







// Task 21 — Boolean Conversion 

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));







// Flow Control Tasks
// Task 22 — Voting Eligibility

{
let age = prompt("Enter your age");

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

}








// Task 23 — Positive or Negative 

let num = prompt("Enter a number");

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}








// Task 24 — Grade System

let marks = prompt("Enter your marks");

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks <= 89) {
    console.log("B Grade");
} else if (marks >= 70 && marks <= 79) {
    console.log("C Grade");
} else if (marks >= 60 && marks <= 69) {
    console.log("D Grade");
} else if (marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}








// Nested If Task
// Task 25 — Job Eligibility
{
let age = prompt("Enter your age");
let height = prompt("Enter your height in cm");
let weight = prompt("Enter your weight in kg");

if (age >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Your weight is not enough");
        }

    } else {
        console.log("Your height is not enough");
    }

} else {
    console.log("Your age is not enough");
}
}








// Switch Tasks
// Task 26 — Traffic Light

let trafficLight = prompt("Enter traffic light color");
switch (trafficLight) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
        break;
}








// Task 27 — Day

let day = 1;

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

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
}








// FINAL MINI PROJECT
// Task 28 — Student Result System

// Step 1 - Get user details
{
let name = prompt("Enter your name");
let age = prompt("Enter your age");
let city = prompt("Enter your city");


// Step 2 - Get marks

let tamil = prompt("Enter Tamil marks");
let english = prompt("Enter English marks");
let maths = prompt("Enter Maths marks");


// Convert marks to numbers

tamil = Number(tamil);
english = Number(english);
maths = Number(maths);
age = Number(age);


// Step 3 - Calculate

let total = tamil + english + maths;
let average = total / 3;


// Step 4 - Check result

let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}


// Step 5 - Check voting

let voting;
if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}


// Step 6 - Display

console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);
}


