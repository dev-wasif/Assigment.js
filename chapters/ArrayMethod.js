// Array Methods Version

var arr9 = [1, 2, 2, 4, 6, 6, 9, 7, 8, 7];
var arr10 = [38, 78, 65, 34, 3, 8, 53];

// Question 1 – Unique values
var unique = [...new Set(arr9)];
console.log("Unique:", unique);

// Question 2 – Duplicates
var duplicates = [...new Set(arr9.filter((item, index) => arr9.indexOf(item) !== index))];
console.log("Duplicates:", duplicates);

// Question 3 – Smallest number
var smallest = Math.min(...arr10);
console.log("Smallest:", smallest);

// Question 4 – Largest number
var largest = Math.max(...arr10);
console.log("Largest:", largest);

// Question 5 – Second Largest
var secondMax = [...new Set(arr10)]
    .sort((a, b) => b - a)[1];

console.log("Second Largest:", secondMax);