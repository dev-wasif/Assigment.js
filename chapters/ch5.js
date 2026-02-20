// === Task 1: Add Two Numbers ===
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

console.log("Sum of " + num1 + " and " + num2 + " is " + sum);


// === Task 2: Basic Arithmetic Operations ===
var a = 3;
var b = 5;

console.log("Subtraction: " + a + " - " + b + " = " + (a - b));
console.log("Multiplication: " + a + " * " + b + " = " + (a * b));
console.log("Division: " + a + " / " + b + " = " + (a / b));
console.log("Modulus: " + a + " % " + b + " = " + (a % b));


// === Task 3: Variable Operations ===
var number;

console.log("Value after variable declaration is: " + number);

number = 5;
console.log("Initial value: " + number);

number = number + 1;
console.log("Value after increment is: " + number);

number = number + 7;
console.log("Value after addition is: " + number);

number = number - 1;
console.log("Value after decrement is: " + number);

console.log("The remainder is: " + (number % 3));


// === Task 4: Ticket Cost ===
var ticketPrice = 600;
var tickets = 5;
var totalCost = ticketPrice * tickets;

console.log("Total cost to buy " + tickets + " tickets to a movie is " + totalCost + " PKR");


// === Task 7: Shopping Cart ===
var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;

var total = (price1 * qty1) + (price2 * qty2) + shipping;

console.log("Shopping Cart");
console.log("Price of item 1 is " + price1);
console.log("Quantity of item 1 is " + qty1);
console.log("Price of item 2 is " + price2);
console.log("Quantity of item 2 is " + qty2);
console.log("Shipping Charges " + shipping);
console.log("Total cost of your order is " + total);


// === Task 8: Marks Sheet ===
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

console.log("Total marks: " + totalMarks);
console.log("Marks obtained: " + obtainedMarks);
console.log("Percentage: " + percentage + "%");


// === Task 9: Currency Converter ===
var usd = 10;
var sar = 25;
var pkr = (usd * 104.80) + (sar * 28);

console.log("Total Currency in PKR: " + pkr);


// === Task 10: Expression Result ===
var num = 5;
var result = ((num + 5) * 10) / 2;

console.log("Result: " + result);


// === Task 11: Age Calculator ===
var currentYear = 2016;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

console.log("They are either " + age2 + " or " + age1 + " years old");


// === Task 13: Lifetime Supply Calculator ===
var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var perDay = 3;

var yearsLeft = maxAge - currentAge;
var totalSnacks = yearsLeft * 365 * perDay;

console.log("Favourite Snack: " + snack);
console.log("You will need " + totalSnacks + " " + snack + " to last you until the age of " + maxAge);
