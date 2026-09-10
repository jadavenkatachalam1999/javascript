
// --------------------------------
// Task 1 — Student Result Analyzer
// --------------------------------

        function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

            let total = mark1 + mark2 + mark3 + mark4 + mark5;
            let average = total / 5;

            let result;
            let grade;

            if (mark1 >= 35 && mark2 >= 35 && mark3 >= 35 && mark4 >= 35 && mark5 >= 35) {
                result = "Pass";

                if (average >= 90) {
                    grade = "A";
                } else if (average >= 75) {
                    grade = "B";
                } else if (average >= 60) {
                    grade = "C";
                } else if (average >= 50) {
                    grade = "D";
                } else {
                    grade = "Fail";
                }

            } else {
                result = "Fail";
                grade = "Fail";
            }

            console.log("Name:", name);
            console.log("Department:", department);
            console.log("Total Marks:", total);
            console.log("Average:", average);
            console.log("Result:", result);
            console.log("Grade:", grade);
        }

        studentResult("Venkat", "CSE", 90, 85, 80, 95, 88);









// ------------------------------------
// Task 2 — Employee Salary Calculator
// ------------------------------------


        let employee = {
            name: "Arun",
            role: "Developer",
            salary: 45000,
            experience: 2
        };

        function calculateSalary(employee) {

            let basicSalary = employee.salary;
            let bonus = 0;

            if (employee.experience >= 5) {
                bonus = basicSalary * 15 / 100;
            } else if (employee.experience >= 2) {
                bonus = basicSalary * 10 / 100;
            }

            let finalSalary = basicSalary + bonus;

            console.log("Name:", employee.name);
            console.log("Role:", employee.role);
            console.log("Basic Salary:", basicSalary);
            console.log("Bonus:", bonus);
            console.log("Final Salary:", finalSalary);
        }

        calculateSalary(employee);




// -------------------------------
// Task 3 — Product Filter System
// -------------------------------

        let products = [
            { name: "Laptop", price: 55000, category: "electronics" },
            { name: "Mouse", price: 800, category: "electronics" },
            { name: "Shirt", price: 1200, category: "fashion" },
            { name: "Shoes", price: 2500, category: "fashion" },
            { name: "Phone", price: 30000, category: "electronics" }
        ];

                // 1. Get products above ₹2,000

                        let above2000 = products.filter(function(product) {
                            return product.price > 2000;
                        });

                        console.log("Products above 2000:", above2000);


                // 2. Get only electronics

                        let electronics = products.filter(function(product) {
                            return product.category === "electronics";
                        });

                        console.log("Electronics:", electronics);


                // 3. Find the first product below ₹1,000

                        let below1000 = products.find(function(product) {
                            return product.price < 1000;
                        });

                        console.log("First product below 1000:", below1000);


                // 4. Calculate total price of all products

                        let totalPrice = products.reduce(function(total, product) {
                            return total + product.price;
                        }, 0);

                        console.log("Total Price:", totalPrice);


                // 5. Check whether any product costs more than ₹50,000

                        let moreThan50000 = products.some(function(product) {
                            return product.price > 50000;
                        });

                        console.log("Any product above 50000:", moreThan50000);


                // 6. Check whether every product has a price above ₹500

                        let above500 = products.every(function(product) {
                            return product.price > 500;
                        });

                        console.log("Every product above 500:", above500);






// ----------------------------
// Task 4 — Employee Management
// ----------------------------

        let employees = [
            {
                id: 101,
                name: "Kavin",
                role: "Frontend Developer",
                salary: 40000
            },
            {
                id: 102,
                name: "Arun",
                role: "Backend Developer",
                salary: 45000
            },
            {
                id: 103,
                name: "Priya",
                role: "HR",
                salary: 35000
            },
            {
                id: 104,
                name: "Dinesh",
                role: "Developer",
                salary: 55000
            },
            {
                id: 105,
                name: "Karthi",
                role: "Manager",
                salary: 60000
            },
            {
                id: 106,
                name: "Ravi",
                role: "Tester",
                salary: 42000
            }
        ];


                // 1. Display all employee names

                        let names = employees.map(function(employee) {
                            return employee.name;
                        });

                        console.log("Employee Names:", names);


                // 2. Display employees earning above ₹40,000

                        let above40000 = employees.filter(function(employee) {
                            return employee.salary > 40000;
                        });

                        console.log("Employees above 40000:", above40000);


                // 3. Find employee with ID 103

                        let employee103 = employees.find(function(employee) {
                            return employee.id === 103;
                        });

                        console.log("Employee ID 103:", employee103);


                // 4. Calculate total salary

                        let totalSalary  = employees.reduce(function(total, employee) {
                            return total + employee.salary;
                        }, 0);

                        console.log("Total Salary:", totalSalary);


                // 5. Find highest-paid employee

                        let highestPaid = employees.reduce(function(highest, employee) {
                            if (employee.salary > highest.salary) {
                                return employee;
                            } else {
                                return highest;
                            }
                        });

                        console.log("Highest Paid Employee:", highestPaid);


                // 6. Sort employees from highest salary to lowest

                        let sortedEmployees = [...employees].sort(function(a, b) {
                            return b.salary - a.salary;
                        });

                        console.log("Sorted Employees:", sortedEmployees);


                // 7. Create a new array containing only employee names

                        let employeeNames = employees.map(function(employee) {
                            return employee.name;
                        });

                        console.log("Names Only:", employeeNames);







// ----------------------
// Task 5 — Shopping Cart
// ----------------------


        let cart = [
            { name: "Laptop", price: 50000, quantity: 1 },
            { name: "Mouse", price: 1000, quantity: 2 },
            { name: "Keyboard", price: 2000, quantity: 1 }
        ];

        function calculateCart(cart) {

            // Total cart value

                    let total = cart.reduce(function(sum, item) {
                        return sum + (item.price * item.quantity);
                    }, 0);

            // 10% discount if total > ₹50,000

                    let discount = 0;

                    if (total > 50000) {
                        discount = total * 10 / 100;
                    }

            // Final payable amount

                    let finalAmount = total - discount;

                    console.log("Total Cart Value:", total);
                    console.log("Discount:", discount);
                    console.log("Final Payable Amount:", finalAmount);
                }

                calculateCart(cart);








// ------------------------------
// Task 6 — Student Search System
// ------------------------------

        let students = [
            { name: "Arun", age: 21, mark: 85 },
            { name: "Priya", age: 22, mark: 92 },
            { name: "Karthi", age: 20, mark: 67 },
            { name: "Dinesh", age: 23, mark: 45 }
        ];


                    // 1. Display all student names

                            let studentNames = students.map(function(student) {
                                return student.name;
                            });

                            console.log("Student Names:", studentNames);


                    // 2. Display students who scored above 80

                            let above80 = students.filter(function(student) {
                                return student.mark > 80;
                            });

                            console.log("Above 80:", above80);


                    // 3. Find student named "Priya"

                            let priya = students.find(function(student) {
                                return student.name === "Priya";
                            });

                            console.log("Priya:", priya);


                    // 4. Calculate average mark

                            let totalMarks = students.reduce(function(total, student) {
                                return total + student.mark;
                            }, 0);

                            let averageMark = totalMarks / students.length;

                            console.log("Average Mark:", averageMark);


                    // 5. Check whether anyone failed

                            let failed = students.some(function(student) {
                                return student.mark < 50;
                            });

                            console.log("Anyone Failed:", failed);


                    // 6. Check whether everyone scored above 40

                            let everyoneAbove40 = students.every(function(student) {
                                return student.mark > 40;
                            });

                            console.log("Everyone above 40:", everyoneAbove40);


                    // 7. Sort students by marks

                            let sortedStudents = [...students].sort(function(a, b) {
                                return b.mark - a.mark;
                            });

                            console.log("Sorted Students:", sortedStudents);







// ---------------------------------------
// Task 7 — Array Transformation Challenge
// ---------------------------------------

        let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


                // 1. Create a new array containing numbers × 2

                        let doubleNumbers = numbers.map(function(number) {
                            return number * 2;
                        });

                        console.log("Numbers x 2:", doubleNumbers);


                // 2. Get only even numbers

                        let evenNumbers = numbers.filter(function(number) {
                            return number % 2 === 0;
                        });

                        console.log("Even Numbers:", evenNumbers);


                // 3. Get numbers greater than 15

                        let greaterThan15 = numbers.filter(function(number) {
                            return number > 15;
                        });

                        console.log("Greater than 15:", greaterThan15);


                // 4. Find the first number greater than 20

                        let firstGreater20 = numbers.find(function(number) {
                            return number > 20;
                        });

                        console.log("First greater than 20:", firstGreater20);


                // 5. Find total of all numbers

                        let total = numbers.reduce(function(sum, number) {
                            return sum + number;
                        }, 0);

                        console.log("Total:", total);


                // 6. Check whether any number is greater than 40

                        let anyGreater40 = numbers.some(function(number) {
                            return number > 40;
                        });

                        console.log("Any greater than 40:", anyGreater40);


                // 7. Check whether every number is positive

                        let allPositive = numbers.every(function(number) {
                            return number > 0;
                        });

                        console.log("Every number positive:", allPositive);


                // 8. Sort from highest to lowest

                        let sortedNumbers = [...numbers].sort(function(a, b) {
                            return b - a;
                        });

                        console.log("Highest to Lowest:", sortedNumbers);






// ------------------------
// Task 8 — String Analyzer
// ------------------------

            let sentence = prompt("Enter a sentence:");

                    // Total characters
                    console.log("Total Characters:", sentence.length);

                    //Uppercase sentence
                    console.log("Uppercase:", sentence.toUpperCase());

                    //Lowercase sentence
                    console.log("Lowercase:", sentence.toLowerCase());

                    // Whether it contains "JavaScript"
                    console.log("Contains JavaScript:", sentence.includes("JavaScript"));

                    //First character
                    console.log("First Character:", sentence.slice(0, 1));

                    //Last character
                    console.log("Last Character:", sentence.slice(-1));
                                
                    let words = sentence.split(" ");

                    // Number of words
                    console.log("Number of Words:", words.length);

                    //Replace "JavaScript" with "Python"
                    console.log("After Replace:", sentence.replace("JavaScript", "Python"));

                    //Convert sentence into an array using split()
                    console.log("Sentence Array:", words);











// ---------------------------------------
// Final Mini Project — Employee Dashboard
// ---------------------------------------


        let dashboardEmployees = [
            {
                id: 101,
                name: "Arun",
                department: "IT",
                salary: 45000,
                experience: 2
            },
            {
                id: 102,
                name: "Priya",
                department: "HR",
                salary: 50000,
                experience: 4
            },
            {
                id: 103,
                name: "Karthi",
                department: "IT",
                salary: 65000,
                experience: 6
            }
        ];


                // 1. Employee List
                //Display all employees.
                console.log("All Employees:");
                console.log(dashboardEmployees);


                // 2. Search 
                //Search employee by name.

                        let searchName = "Priya";

                        let searchEmployee = dashboardEmployees.find(function(employee) {
                            return employee.name === searchName;
                        });

                        console.log("Search Result:", searchEmployee);


                // 3. Department Filter
                //Filter employees by department.

                        let departmentEmployees = dashboardEmployees.filter(function(employee) {
                            return employee.department === "IT";
                        });

                        console.log("IT Employees:", departmentEmployees);


                // 4. Salary Filter
                //Show employees earning more than ₹50,000.

                        let highSalaryEmployees = dashboardEmployees.filter(function(employee) {
                            return employee.salary > 50000;
                        });

                        console.log("Employees above 50000:", highSalaryEmployees);


                // 5. Salary Calculation
                //Calculate total company salary.

                        let companyTotalSalary = dashboardEmployees.reduce(function(total, employee) {
                            return total + employee.salary;
                        }, 0);

                        console.log("Total Company Salary:", companyTotalSalary);


                // 6. Highest Salary
                //Find the highest-paid employee.

                        let highestSalary = dashboardEmployees.reduce(function(highest, employee) {
                            if (employee.salary > highest.salary) {
                                return employee;
                            } else {
                                return highest;
                            }
                        });

                        console.log("Highest Salary Employee:", highestSalary);


                // 7. Experience
                //Find employees with more than 3 years' experience.

                        let experiencedEmployees = dashboardEmployees.filter(function(employee) {
                            return employee.experience > 3;
                        });

                        console.log("Experience above 3 years:", experiencedEmployees);


                // 8. Sorting
                // Low to High salary

                        let lowToHigh = [...dashboardEmployees].sort(function(a, b) {
                            return a.salary - b.salary;
                        });

                        console.log("Salary Low to High:", lowToHigh);


                // 9. High to Low salary

                        let highToLow = [...dashboardEmployees].sort(function(a, b) {
                            return b.salary - a.salary;
                        });

                        console.log("Salary High to Low:", highToLow);


                // 10. Statistics

                        let averageSalary = companyTotalSalary / dashboardEmployees.length;

                        console.log("----- Statistics -----");
                        console.log("Total Employees:", dashboardEmployees.length);
                        console.log("Total Salary:", companyTotalSalary);
                        console.log("Highest Salary:", highestSalary.salary);
                        console.log("Average Salary:", Math.round(averageSalary));