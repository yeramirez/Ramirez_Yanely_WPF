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

var totalSlicePerPerson = (slices * pizzas)/people;

var together = "Each person ate " + totalSlicePerPerson + " slices of pizza at the party";

console.log(together);