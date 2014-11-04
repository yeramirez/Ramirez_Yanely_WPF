
 /*
Yanely Ramirez
Personal Expressions
WPF 1411
11-02-2014
 */

//alert("Testing 1,2,3!");

 //How much money will I spend on gas in one month?
 //How much money did you spend on the first fill-up.

 //Ask user how many fill ups they do in a month?
 var gasFillUps = prompt("We are going to calculate how much money you spend on gas each month! How many fill ups do you get in a month?");
 console.log("You get " +gasFillUps+ " fill ups each month.");

 //Ask user how much gas costs per gallon
 var gasPrice = prompt("How much does gas cost at your gas station?");
 console.log("The gas you buy costs $"+gasPrice+" per gallon.");

 //Ask user how many gallons it takes to fill up their tank?
 var tankGallons = prompt("How many gallons does it take your car to fill up?");
 console.log("Your car uses "+tankGallons+" gallons of gas.");

 //Multiply the needed numbers
 var results = parseInt(gasFillUps) * Number(gasPrice) * parseInt(tankGallons);
 console.log("You spend $"+ results + " on gas each month.");



