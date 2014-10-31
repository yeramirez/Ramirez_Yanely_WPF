/**
 * Created by yxnely on 10/31/14.
 */
//Yanely Ramirez, October 31, 2014, WPF, Lab Expressions


//Assign a number to the amount of slices per pizza
var slices = 9;

//Assign a number to the amount of people at the party
var people = 15;

//Assign a number to the amount of pizzas ordered
var pizzas = 11;

//Insert the equation to solve the number of slices per person.
var totalSlicePerPerson = (slices * pizzas)/people;

//Raw outcome of what the number is.
console.log(totalSlicePerPerson);

//Insert how you want it formatted in the end.
var together = "Each person ate " + totalSlicePerPerson + " slices of pizza at the party";

//The final formatting of how you want the outcome to look like.
console.log(together);


//To find the remainder you must use Modulo