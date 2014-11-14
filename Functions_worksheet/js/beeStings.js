
 /*
Yanely Ramirez
Bee Stings
WPF 1411
11-13-2014
 */

//alert("Testing 1,2,3!");

 userPrompt = prompt("Please assign a weight (in pounds) to calculate the bee stings.");

 while(userPrompt ==="" || isNaN(userPrompt)){

  userPrompt = prompt("Please only type in numbers and don't leave this space blank!\nEnter a weight in pounds.");

 }

 function beeStings(userPrompt){
  var beeStings = Number(userPrompt) * 8.666666667;
  return beeStings;

 }

 beeStings(userPrompt);
 results = beeStings(userPrompt);


 console.log("The amount of stings it takes to kill an animal that weighs " + userPrompt + " is: " + results + ".");

