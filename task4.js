// Task 1 — For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}





// Task 2 — Reverse Number

for (let i = 10; i >= 1; i--) {
    console.log(i);
}






// Task 3 — Even Numbers

for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}







// Task 4 — Odd Numbers

for (let i = 1; i <= 20; i++) {

    if (i % 2 != 0) {
        console.log(i);
    }

}






// Task 5 — Multiplication Table
{
let num = prompt("Enter a number");

num = Number(num);

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
}






// While Loop
// Task 6 — Countdown
{
let num = 10;

while (num >= 1) {
    console.log(num);
    num--;
}
}






// Task 7 — Sum of Numbers
{
let num = 1;
let sum = 0;
while (num <= 10) {
    sum = sum + num;
    num++;
}
console.log(sum);
}







// Do While
// Task 8 — Print Numbers

let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);







// Task 9 — Do While Understanding
                  
                       /* a = 10
                        do runs -> prints 10
                        a++ -> becomes 11
                        Now it checks:
                        11 <= 5 -> false 
                        Loop stops */
{                  
let a = 10;         // while : checks condition first, then runs.
do {                 // do...while : runs first, then checks condition.
    console.log(a);   // That's why 10 is printed even though the condition is false
    a++;
} while (a <= 5);
}








// For..of
// Task 10 — String Characters

let name = "javascript";
for (let a of name) {
    console.log(a);
}








// Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}








// Task 12 — Student Names

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
for (let student of students) {
    console.log("Student: " + student);
}







//For...in
//Task 13 — Employee Object

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
for (let key in employee) {
    console.log(key, employee[key]);
}







// Task 14 — Product Object

let product = {
    productName: "Earbuds",
    price: 4000,
    brand: "Realme",
    category: "Electronics",
    stock: 8
};

for (let key in product) {
    console.log(key, product[key]);
}







// Functions
// Task 15 — Simple Function

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();








// Task 16 — Function With Parameter
function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");








// Task 17 — Multiple Parameters
function student(name, age, department) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);

}

student("Venki", 27, "CCE");

student("Vinod", 24, "ESE");

student("Ashritha", 23, "Cyber");








// Return
// Task 18 — Addition Function
{
function add(a, b) {

    return a + b;

}

let result = add(10, 20);

console.log(result);
}








// Task 19 — Salary
{
function salary(amount) {

    return amount;

}

let result = salary(50000);

console.log(result);
}








// Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {

    return salary + bonusAmount;

}

let total = bonus(50000, 5000);

console.log(total);








// Task 21 — Default Parameter
{
function employee(name, role = "Developer") {

    console.log("Name:", name);
    console.log("Role:", role);

}

employee("Arun");

employee("Priya", "Designer");

}






// Function Types
// Task 22 — Named Function

function square(number) {

    return number * number;

}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));









// Task 23 — Anonymous Function
{
let calculate = function(a, b) {

    return a + b;

};

let result = calculate(10, 20);

console.log(result);
}








// Task 24 — Arrow Function

let multiply = (a, b) => {

    return a * b;

};

let result = multiply(10, 5);

console.log(result);









// Scope
// Task 25 — Predict the Output

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
   // console.log(b);
   // console.log(c);
}
test();









// Hoisting
// Task 26 — Predict

console.log(a);   // var -> Can access before declaration
var a = 10;        //         It  Gives undefined
                    //         It Can be reassigned





// Task 27 

// console.log(b);         // let -> Cannot access before declaration
// let b = 20;             //         It Gives ReferenceError
                        //         It Can be reassigned  




// Task 28 

// console.log(c);         // const -> Cannot access before declaration
// const c = 30;           //          It Gives ReferenceError
                        //          It  Cannot be reassigned






// IIFE
// Task 29 — Self Invoking Function


(function() {

    console.log("Welcome to JavaScript");

})();


(function(product, discount) {

    console.log(
        `Product: ${product}, Discount: ${discount}%`
    );

})("Shoes", 50);









// Task 30 — Callback / Higher-Order Function

function welcome() {

    console.log("Welcome");    // welcome is the callback function 

}                               // Callback = a function given to another function.

function execute(callback) {     // execute is the Higher-Order Function (Beacause :'execute' receives another function 'welcome')

    callback();                    // Higher-order function = a function that takes another function

}
execute(welcome);









// Generator Function
//Task 31 — Cashback

function* cashback() {

    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";

}

let allCash = cashback();

for (let value of allCash) {

    console.log(value);

}










// FINAL MINI PROJECT
// Task 32 — Employee Management Console

// Employee data

let employees = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

];

// Requirements

// 1. for...of
// Print every employee

for (let employee of employees) {

    console.log(employee);

}


// 2. for...in
// Print each employee's keys and values

for (let employee of employees) {

    for (let key in employee) {

        console.log(key, employee[key]);

    }

}


// 3. Function
// Create a function to display employee information.

function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);

}


// 4. Function parameters
//Pass employee information to the function.

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

}


// 5. Return
// Create a function that returns an employee's salary.

function getSalary(salary) {

    return salary;

}

let employeeSalary = getSalary(employees[0].salary);
console.log("Employee Salary:", employeeSalary);


// 6. Condition

for (let employee of employees) {

    if (employee.salary >= 40000) {

        console.log(employee.name + " has salary 40000 or above");

    } else {

        console.log(employee.name + " has salary below 40000");

    }

}


// 7. Arrow function
// Create an arrow function for another simple calculation.

let addBonus = (salary, bonus) => {

    return salary + bonus;

};

let totalSalary = addBonus(40000, 5000);
console.log("Salary with Bonus:", totalSalary);


// 8. Generator
// Create a generator that produces employee benefits:

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}

let employeeBenefits = benefits();
for (let benefit of employeeBenefits) {
    console.log("Employee Benefit:", benefit);

}

