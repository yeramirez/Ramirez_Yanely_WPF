/*
Yanely Ramirez
Day 4 Prompts
WPF 1411
11-3-14
 */

//alert("Testing 1, 2, 3!");

//Ask User for input

//prompt() - asks the user to type something in
var yearBorn = prompt("Enter your year of birth:");
console.log(yearBorn);

//Figure out how old we are
var age = 2014 - yearBorn;
console.log("You are "+ age + " years old.");

//Calculate the area of a rectangle
//area = length * width

var length = prompt("We are going to calculate the area of a rectangle.\nPlease enter the length of your rectangle:");

//Validating the length entered
while(length==="" || isNaN(length)){

    length = prompt("Please only type in numbers and don't leave blank!\nEnter a length.");

}

var width = prompt("Please enter the width of your rectangle:");

//Validating the width entered
while(width ==="" || isNaN(width)){

    width = prompt("Please only type in numbers and don't leave blank!\nEnter a width.");

}

//Calculate the actual area
var area = length * width;

//Create a results variable and then console log that
var results = "The area of your rectangle with the length of "+length+" and a width of "+width+" is "+area+".";
console.log(results);
alert(results);


//console the area
console.log("The area of your rectangle is "+ area);

console.log("The area of your rectangle with the length of "+length+" and a width of "+width+" is "+area+".");

//Alert the user with the same information
alert("The area of your rectangle with the length of "+length+" and a width of "+width+" is "+area+".");
