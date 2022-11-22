"use strict";
/*
So we're using the new typescript 'let' keyword  for variable declarations,
as opposed to the traditional JavaScript var keyword.The JavaScript var keyword had
a number of gotchas and pitfalls, such as scoping issues, capturing, shadowing, and so on.
*/
var found = true;
var grade = 88.6;
var firstName = "Anup";
var lastName = 'Kumar';
var mydata = 50.0;
// let's break it!
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(mydata);
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template Strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
/*

 Error: Cannot redeclare block-scoped variable 'name'.ts
 You can solve the error, by converting your file to an ES module.
 The export {} line marks the file as an external module. A module is a file that contains at least 1 import or export statement.

 */
//export {};
var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
for (var i = 0; i < 5; i++) {
    console.log(i);
}
var sportsTwo = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
for (var _a = 0, sportsTwo_1 = sportsTwo; _a < sportsTwo_1.length; _a++) {
    var tempSport = sportsTwo_1[_a];
    console.log(tempSport);
}
