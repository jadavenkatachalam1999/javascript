// Task 1 — var, let, const
{
  var studentName = "Venkat";
  let studentAge = 27;
  const collegeName = "NBKR College";
//requirements

    // 1.Print all three values.
    console.log(studentName);
    console.log(studentAge);
    console.log(collegeName);

    // 2.Change the var value.

    studentName = "Vinod";
    console.log(studentName);

    // 3.Change the let value.
    studentAge = 23;
    console.log(studentAge);

    // 4.Try changing the const value and observe the error
    // collegeName = "KVR College";

    // 5.Try redeclaring the var variable
    var studentName = "Arun";
    console.log(studentName);

    // 6.Try redeclaring the let variable and observe the error.
    // let studentAge = 25;
}



//Task 2 — User Information
{
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);
}



//Task 3 — Welcome Message
{
let name = prompt("Enter your name:");

alert("Welcome " + name + "!");
}



//Task 4 — Age Calculator
{
let birthYear = prompt("Enter your birth year:");

let currentYear = 2026;

let age = currentYear - birthYear;

console.log("Birth Year: " + birthYear);
console.log("Age: " + age);
}



//Task 5 — Identify Data Types
{
let text = "Hello";
let number = 100;
let decimal = 25.5;
let value1 = true;
let value2 = false;
let value3;
let value4 = null;

console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
}



//Task 6 — Student Data
{
let student = {
    name: "Venky",
    age: 27,
    city: "Hyderabad",
    qualification: "B.Tech",
    isStudent: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);
}



//Task 7 — Fruit Array
{
let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First fruit: " + fruits[0]);

console.log("Second fruit: " + fruits[1]);

console.log("Last fruit: " + fruits[fruits.length - 1]);

console.log("Total fruits: " + fruits.length);
}



//Task 8 — Basic Calculator
{
let a = 20;
let b = 5;

console.log("Addition: " + (a + b));

console.log("Subtraction: " + (a - b));

console.log("Multiplication: " + (a * b));

console.log("Division: " + (a / b));

console.log("Modulus: " + (a % b));

console.log("Exponentiation: " + (a ** b));
}



//Task 9 — Shopping Bill
{
let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Shirt: " + shirt);
console.log("Pant: " + pant);
console.log("Shoes: " + shoes);
console.log("Total: " + total);
}



//Task 10 — Simple Marks Calculation
{
let tamil = 80;
let english = 75;
let maths = 90;

let total = tamil + english + maths;

let average = total / 3;

console.log("Total Marks: " + total);
console.log("Average Marks: " + average);
}



//Task 11 — Post Increment
{
let a = 10;

let b = a++;

console.log(a);
console.log(b);
}



//Task 12 — Pre Increment
{
let a = 10;

let b = ++a;

console.log(a);
console.log(b);
}



//Task 13 — Post Decrement
{
let a = 20;

let b = a--;

console.log(a);
console.log(b);
}



//Task 14 — Pre Decrement
{
let a = 20;

let b = --a;

console.log(a);
console.log(b);
}



//Task 15 — Find the Final Values
{
let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
}



//Task 16 — Assignment Operators
{
let num;

num = 10;
num += 5;
console.log("+= :", num);

num = 10;
num -= 5;
console.log("-= :", num);

num = 10;
num *= 5;
console.log("*= :", num);

num = 10;
num /= 5;
console.log("/= :", num);

num = 10;
num %= 5;
console.log("%= :", num);

num = 10;
num **= 5;
console.log("**= :", num);
}



//Task 17 — Mini Student Profile
{
let name = "Venkat";
let age = 27;
let city = "nellore";
let college = "NCR College";

let subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "Python"
];

let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name: " + student.name);

console.log("Student Age: " + student.age);

console.log("City: " + student.city);

console.log("First Subject: " + student.subjects[0]);

console.log("Last Subject: " + student.subjects[student.subjects.length - 1]);

console.log("Total Subjects: " + student.subjects.length);

console.log(student);
}


// Final Challenge — User + Calculator
{

let number1 = prompt("Enter first number:");
let number2 = prompt("Enter second number:");

console.log("Addition: " + (number1 + number2));

console.log("Subtraction: " + (number1 - number2));

console.log("Multiplication: " + (number1 * number2));

console.log("Division: " + (number1 / number2));

console.log("Modulus: " + (number1 % number2));

console.log("Power: " + (number1 ** number2));
}