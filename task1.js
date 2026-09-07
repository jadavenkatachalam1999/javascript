/* JavaScript Basics — 50 Questions

-------------------------------------
===> Variables: Questions & Answers
--------------------------------------

1) What is a variable in JavaScript?
A) variable is a container used to store a value.


2) What are the three keywords used to create variables?
A) var, let, and const.


3) Write the syntax to create a variable using var.
A) var variableName = value;


4) Write the syntax to create a variable using let.
A) let variableName = value;


5) Write the syntax to create a variable using const.
A) const variableName = value;


6) What is declaration?
A) Declaration means creating a variable without assigning a value.
    Ex: let age;


7) What is initialization?
A) Initialization means assigning a value to a variable when it is created.
    EX: let age = 27;


8) What is reassignment?
A) Reassignment means changing the value of an existing variable.
    EX: let age = 25;
        age = 30;


9) What is redeclaration?
A) Redeclaration means declaring the same variable again.
    EX: var x = 10;
        var x = 20;


10) Which keyword allows redeclaration?
A) var


11) Which keyword allows reassignment?
A) var and let.


12) Which keyword requires initialization when declared?
A) const


13) Identify the declaration and initialization:  let age = 25;
A)  Declaration: let age
    Initialization: = 25


14) What is the value of a?
    var a = 100;
    console.log(a);
A) 100


15) Change the value of this variable to 200
    let number = 100;
A) number = 200;




---------------------------------------
===> var : Questions & Answers
----------------------------------------

16) What will be the output?
    var a = 10;
    console.log(a);
A) 10


17) What will be the output?
    var a = 10;
    a = 20;
    console.log(a);
A) 20


18) What will be the output?
    var a = 10;
    var a = 30;
    console.log(a);
A) 30


19) Write a var variable named name with the value "John"
A) var name = "John";


20) Create a var variable named price with the value 500.
A) var price = 500;


21) Reassign price from 500 to 1000.
A) price = 1000;


22) What will be the output?
    var x = 50;
    x = 100;
    console.log(x);
A) 100


23) Can a var variable be reassigned?
A) Yes.


24) Can a var variable be redeclared?
A) Yes.


25) Write an example of var redeclaration
A)  var x = 10;
    var x = 20;
    console.log(x);




--------------------------------
===> let : Questions & Answers
---------------------------------

26) Create a let variable named age with the value 25.
A) let age = 25;


27) What will be the output?
    let age = 20;
    age = 30;
    console.log(age);
A)30


28) Can a let variable be reassigned?
A) Yes.


29) Can a let variable be redeclared?
A) No, not in the same scope.


30) Find the error:
    let name = "John";
    let name = "David";
A) The same let variable cannot be redeclared in the same scope.


31) Create a let variable called city and assign "Chennai".
A) let city = "Chennai";


32) Change the value of city to "Salem".
A) city = "Salem";


33) What will be the output?
    let x = 10;
    x = 50;
    console.log(x);
A) 50


34) Write a let variable called salary with the value 25000.
A) let salary = 25000;


35) Reassign salary to 30000.
A)salary = 30000;




----------------------------------
===> const : Questions & Answers
----------------------------------

36) Create a const variable called pi with the value 3.14
A) const pi = 3.14;


37) Can a const variable be reassigned?
A) No.


38) Can a const variable be redeclared?
A) No.


39) What is wrong with this code?
    const age;
    age = 25;
A) A const variable must be initialized when it is declared.
    Correct: const age = 25;


40) What happens here?
    const price = 500;
    price = 1000;
A) An error occurs because a const variable cannot be reassigned.


41) Create a const variable called country with the value "India"
A) const country = "India";


42) What will be the output?
    const x = 100;
    console.log(x);
A) 100


43) Which keyword should you use if the value should not be reassigned?
A) const


44) What is the difference between let and const?
A)  let can be reassigned.
    const cannot be reassigned.
    Example:
        let age = 20;
        age = 25; // Allowed
        const age = 20;
        age = 25; // Error


45) What is the difference between var and const?
A)  var can be reassigned and redeclared.
    const cannot be reassigned or redeclared.
    const must be initialized when declared.




---------------------------------------------
===> Printing & Console : Questions & Answers
---------------------------------------------

46) Write JavaScript code to print Hello World using console.log().
A) console.log("Hello World");


47) Write JavaScript code to print the number 500 using console.log().
A) console.log(500);


48) What is the purpose of console.warn()?
A)  It is used to display a warning message in the console.
    console.warn("This is a warning");


49) What is the purpose of console.error()?
A)  It is used to display an error message in the console.
    console.error("Something went wrong");


50) What is the purpose of each?
A)  alert()	      --->      Displays a message in a popup
    prompt()	   --->     Asks the user to enter a value
    confirm()	    --->    Asks the user to confirm an action
    document.writeln()--->	Writes content on the webpage
    console.log()	--->    Displays information in the browser console

*/




---------------------------------------------
//Practical Questions : Questions & Answers
---------------------------------------------
    
// 1) Create a variable for student name, age, and mark and print all three.

let studentName = "Venky";
let age = 27;
let mark = 75;

console.log(studentName);
console.log(age);
console.log(mark);



// 2)  Ask the user's name using prompt() and display it using alert():

let name1 = prompt("Enter your name");
alert(name1);



// 3) Ask the user's age using prompt() and print it using console.log():

let age1 = prompt("Enter your age");
console.log(age1);



// 4) Ask the user a question using confirm():

let answer = confirm("Are you ready?");
console.log(answer);

// 5) Ask the user's name and display it on the webpage using document.writeln().

let name2 = prompt("Enter your name");
document.writeln(name2);

