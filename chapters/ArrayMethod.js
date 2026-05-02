var arr9 = [1, 2, 2, 4, 6, 6, 9, 7, 8, 7];
var arr10 = [38, 78, 65, 34, 3, 8, 53];


// Question 1

var unique = [];

for (var i = 0; i < arr9.length; i++) {
    var isDuplicate = false;

    for (var j = 0; j < unique.length; j++) {
        if (arr9[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        unique.push(arr9[i]);
    }
}

console.log("Unique:", unique);


// Question 2

var duplicates = [];

for (var i = 0; i < arr9.length; i++) {
    for (var j = i + 1; j < arr9.length; j++) {

        if (arr9[i] === arr9[j]) {

            var already = false;

            for (var k = 0; k < duplicates.length; k++) {
                if (duplicates[k] === arr9[i]) {
                    already = true;
                    break;
                }
            }

            if (!already) {
                duplicates.push(arr9[i]);
            }
        }
    }
}

console.log("Duplicates:", duplicates);


// Question3

var smallest = arr10[0];

for (var i = 1; i < arr10.length; i++) {
    if (arr10[i] < smallest) {
        smallest = arr10[i];
    }
}

console.log("Smallest:", smallest);


// Question4

var largest = arr10[0];

for (var i = 1; i < arr10.length; i++) {
    if (arr10[i] > largest) {
        largest = arr10[i];
    }
}

console.log("Largest:", largest);


// Question No 5

var max = arr10[0];
var secondMax = arr10[0];

for (var i = 1; i < arr10.length; i++) {

    if (arr10[i] > max) {
        secondMax = max;
        max = arr10[i];
    } else if (arr10[i] > secondMax && arr10[i] !== max) {
        secondMax = arr10[i];
    }
}

console.log("Second Largest:", secondMax);