/*
So we're using the new typescript 'let' keyword  for variable declarations, 
as opposed to the traditional JavaScript var keyword.The JavaScript var keyword had 
a number of gotchas and pitfalls, such as scoping issues, capturing, shadowing, and so on. 
*/

let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = 'Kumar';

let mydata : any = 50.0
// let's break it!
/*
found = 0;
grade = "A";
firstName = false;
*/

console.log(mydata)
console.log(found);
console.log("The grade is " + grade);

console.log("Hi " + firstName + " " + lastName);

// use template Strings
console.log(`Hi ${firstName} ${lastName}`);

/*

 Error: Cannot redeclare block-scoped variable 'name'.ts
 You can solve the error, by converting your file to an ES module.
 The export {} line marks the file as an external module. A module is a file that contains at least 1 import or export statement.

 */
//export {};

let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let tempSport of sportsOne) {

    if (tempSport == "Cricket") {
        console.log(tempSport  + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}

let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Review average = " + average);

for (let i=0; i < 5; i++) {
    console.log(i);
}

let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

sportsTwo.push("Baseball");
sportsTwo.push("Futbol");

for (let tempSport of sportsTwo) {
    console.log(tempSport);
}