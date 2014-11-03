/*
Yanely Ramirez
Day 4 Arrays
WPF 1411
11-3-2014
 */

// alert("Testing to see if linked");

//Star a basic array
var avengersNames = ["Hulk","Spiderman","Iron Man"];
console.log(avengersNames);

//Access a specific Avenger in our array
console.log(avengersNames[1]);

//We can use a variable to represent our index number as well
var num = 2;

//Let's print Iron Man's name
console.log(avengersNames[num]);

//Add an avenger to our array
avengersNames[3] = "Thor";
console.log(avengersNames);

//Figure out the length of the array
//.length property
//Dot syntax - put a period in it

console.log(avengersNames.length);

//add another avenger
avengersNames[avengersNames.length] = "Captain America";
console.log(avengersNames);