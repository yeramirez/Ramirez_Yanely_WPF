/**
 * Created by yxnely on 10/31/14.
 */
//Yanely Ramirez, October 31, 2014, WPF, Lab Expressions


//Assign a number to the amount of slices per pizza
var slices = 13;

//Assign a number to the amount of people at the party
var people = 30;

//Assign a number to the amount of pizzas ordered
var pizzas = 15;

//Insert the equation to solve the number of slices per person.
var totalSlicePerPerson = (slices * pizzas)/people;

//Raw outcome of what the number is.
console.log(totalSlicePerPerson);

//Insert how you want it formatted in the end.
var together = "Each person ate " + totalSlicePerPerson + " slices of pizza at the party";

//The final formatting of how you want the outcome to look like.
console.log(together);


//To find the remainder you must use Modulo
//This will help you find out how many slices sparky gets.

var sparkySlices = slices * pizzas % people;

//This is the raw amount of how many slices Sparky will get.
console.log(sparkySlices);

//Putting the Sparky slices together
var together = "Sparky got " + sparkySlices + " slices of pizza";

//The final formatting of how you want the outcome to look like.
//Also, wondering why Sparky got way more slices than anyone else, but I guess we can just say he's a husky.
console.log(together);

//Assign numbers to your grocery bills.
var g1 = 51;
var g2 = 103;
var g3 = 94;
var g4 = 77;
var g5 = 231;

var totalGroceryBills = g1 + g2 + g3 + g4 + g5;
console.log(totalGroceryBills);