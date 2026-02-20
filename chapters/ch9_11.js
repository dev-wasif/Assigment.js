// Question 1
var city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    console.log("Welcome to city of lights");
} else {
    console.log("Welcome to " + city);
}


// Question 2
var gender = prompt("Enter your gender (male/female):").toLowerCase();
if (gender === "male") {
    console.log("Good Morning Sir");
} else if (gender === "female") {
    console.log("Good Morning Ma'am");
} else {
    console.log("Good Morning");
}


// Question 3
var signal = prompt("Enter traffic signal color (Red/Yellow/Green):").toLowerCase();
if (signal === "red") {
    console.log("Must Stop");
} else if (signal === "yellow") {
    console.log("Ready to move");
} else if (signal === "green") {
    console.log("Move now");
} else {
    console.log("Invalid color");
}


// Question 4
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("Fuel is sufficient");
}


// Question 5

// a
var a = 4;
if (++a == 5) {
    console.log("a: given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
    console.log("b: given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13) {
    console.log("c: condition 1 is true");
}
if (c === 13) {
    console.log("c: condition 2 is true");
}
if (++c < 14) {
    console.log("c: condition 3 is true");
}
if (c === 14) {
    console.log("c: condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    console.log("d: The cost equals");
}

// e
if (true) {
    console.log("e: True");
}
if (false) {
    console.log("e: False");
}

// f
if ("car" < "cat") {
    console.log("f: car is smaller than cat");
}


// Question 8
var num = parseInt(prompt("Enter a number:"));
if (num % 3 === 0) {
    console.log(num + " is divisible by 3");
} else {
    console.log(num + " is NOT divisible by 3");
}


// Question 9
var num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// Question 10
var temp = parseFloat(prompt("Enter temperature:"));
if (temp > 40) {
    console.log("It is too hot outside.");
} else if (temp > 30) {
    console.log("The Weather today is Normal.");
} else if (temp > 20) {
    console.log("Today’s Weather is cool.");
} else if (temp > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("It's very cold!");
}
