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

//add Black Widow to the mix
avengersNames[avengersNames.length] = "Black Widow";

//access the last avenger in the array
console.log(avengersNames[avengersNames.length - 1]);

//New method specific to arrays called push
//it adds whatever we put in automatically to the end of our array
avengersNames.push("Hawkeye");
console.log(avengersNames);

//pop() - method of an array that removes the last item in the array
//you can save the popped variable (if you want to)
//set a variable equal to that pop method
var soloAvenger = avengersNames.pop();
console.log(avengersNames);
console.log(soloAvenger);

//Pick Oranges every day
//Track how many oranges are picked in each day
var orangeBins = [234, 473, 20, 709];

//How many oranges were picked in total
//Store that in a variable
var orangeTotal = orangeBins[0] + orangeBins[1] + orangeBins[2] + orangeBins[3];
console.log(orangeTotal + " is the total number of oranges picked.");

//What is the average oranges picked?
var orangeAverage = orangeTotal/orangeBins.length;
console.log("The average amount of oranges picked in "+ orangeBins.length +" days is "+ orangeAverage+".");
