
 /*
Yanely Ramirez
Logical Operators
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3!");

 //Buying an iPad
 //If the price is less than or equal to our budget or our paycheck is over $1000
 //Then we can buy the iPad

 var budget = prompt("What is your budget?");

 //Validate the budget number
 while(height ==="" || isNaN(budget)){

  budget = prompt("Please only type in numbers and don't leave blank!\nEnter a budget.");

 }

 var iPadPrice = prompt("What is the price of the iPad?");

 //Validate the iPad Price
 while(iPadPrice ==="" || isNaN(iPadPrice)){

  iPadPrice = prompt("Please only type in numbers and don't leave blank!\nEnter a height.");

 }
 var payCheck = prompt("How much is your paycheck?");

 //Validate the paycheck number
 while(payCheck ==="" || isNaN(payCheck)){

  payCheck = prompt("Please only type in numbers and don't leave blank!\nEnter a height.");

 }

 //&& and logical operator
 //The iPad must be BOTH of these things
 if(Number(iPadPrice)<=Number(budget) && Number(payCheck)>1000){
  console.log("iPad is within budget and your check is over $1000.");

 } else{
  console.log("Can't buy the iPad.")
 }

 // || - or logical operator
 //We can buy if one of the conditions is met
 if(Number(iPadPrice)<=Number(budget) || Number(payCheck)>1000){
  console.log("You can buy the iPad!");
 } else {

   console.log("You can't but the iPad.");
 }

 //&& and logical operator
 //The iPad must be BOTH of these things
 //Or I win the lottery
 var wonLottery = true;

 if((Number(iPadPrice)<=Number(budget) && Number(payCheck)>1000) || wonLottery){
  console.log("iPad is within budget and your check is over $1000.");

 } else{
  console.log("Can't buy the iPad.")
 }