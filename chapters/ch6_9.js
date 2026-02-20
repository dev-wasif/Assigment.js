var a = 2, b = 1;
console.log("Initial values: a = " + a + ", b = " + b);

var result = --a - --b + ++b + b--;
console.log("After --a: a = " + a);
console.log("After --a - --b: b = " + b);
console.log("After --a - --b + ++b: b = " + b);
console.log("After --a - --b + ++b + b--: b = " + b);
console.log("Final: a = " + a + ", b = " + b + ", result = " + result);
console.log("Explanation: --a - --b + ++b + b-- = (1) - (0) + (1) + (1) = 3");


var userName = prompt("Please enter your name:");
if (userName) {
    console.log("Hello, " + userName + "! Welcome!");
} else {
    console.log("Hello, Guest! Welcome!");
}


var userInput = prompt("Enter a number for multiplication table:");
var number;

if (userInput === null || userInput.trim() === "") {
    number = 5;
    console.log("No number entered. Using default value: 5");
} else {
    number = parseInt(userInput);
    console.log("You entered: " + number);
}

console.log("Multiplication Table of " + number + ":");
for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


var subject1 = prompt("Enter name of first subject:");
var subject2 = prompt("Enter name of second subject:");
var subject3 = prompt("Enter name of third subject:");

var totalMarksEach = 100;

var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalMarks = totalMarksEach * 3;
var totalObtained = marks1 + marks2 + marks3;
var percentage = (totalObtained / totalMarks) * 100;

console.log("Subject  Total  Obtained  Percentage");
console.log("--------------------------------------------");
console.log(subject1 + "   " + totalMarksEach + "   " + marks1 + "   " + ((marks1/totalMarksEach)*100).toFixed(0) + "%");
console.log(subject2 + "   " + totalMarksEach + "   " + marks2 + "   " + ((marks2/totalMarksEach)*100).toFixed(0) + "%");
console.log(subject3 + "   " + totalMarksEach + "   " + marks3 + "   " + ((marks3/totalMarksEach)*100).toFixed(0) + "%");
console.log("--------------------------------------------");
console.log("   " + totalMarks + "   " + totalObtained + "   " + percentage.toFixed(0) + "%");
