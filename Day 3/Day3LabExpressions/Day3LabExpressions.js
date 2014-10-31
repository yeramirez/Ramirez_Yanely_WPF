/**
 * Created by yxnely on 10/31/14.
 */
//Yanely Ramirez, October 31, 2014, WPF, Lab Expressions


//Assign a number to the amount of slices per pizza
var slices = 10;

//Assign a number to the amount of people at the party
var people = 15;

//Assign a number to the amount of pizzas ordered
var pizzas = 10;

//Insert the equation to solve the number of slices per person.
var totalSlicePerPerson = (slices * pizzas)/people;

//Insert how you want it formatted in the end.
var together = "Each person ate " + totalSlicePerPerson + " slices of pizza at the party";

console.log(together);