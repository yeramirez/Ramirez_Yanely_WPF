
 /*
Yanely Ramirez
Personal - Conditional
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3!");

 //Determine the problem you will be solving

 //Finding out how far you would have to walk if you want to go somewhere and if you are up for walking to it
 //Breaking it down: Where do you want to walk to?
 //How far is it in miles?
 //How far are you willing to walk to go to this place?

 //Where do you want to walk to?
 var place = prompt("Where do you want to walk to?");

 //How far is it?
 var distance = prompt("How far is it? (miles)");

 //How far are you willing to walk?
 var walkDistance = prompt("How far are you willing to walk? (miles)");

 //Determine how far the place is
 var totalDistance = distance * 2;

 //If statement
 if(parseInt(totalDistance)<=(parseInt(walkDistance))){
  console.log("Walk to the "+place+ ". You can do it! :)");

 } else {
  console.log("Do not walk to "+place+"! You will regret it and hate yourself!");

 }




