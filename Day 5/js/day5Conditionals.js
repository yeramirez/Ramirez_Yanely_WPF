
 /*
Yanely Ramirez
Conditionals
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3!");

 //Basic Conditional

 //Is the child old enough to ride the ride?

 //Create a boolean variable
 var oldEnough = false;

 //If the child is old enough, console log they can ride

 /*
 if(condition to test){

 Code if true goes here

 }

  */

 if(oldEnough){
   //True code goes here
   console.log("You are old enough to ride the ride!");

 } else{
   //False code goes here
  console.log("Sorry, you are not old enough.");

 }

 console.log("After the if statement.");



 //Relational Operators
 //Compares two values and returns a boolean
 //If the kid is over 48 inches tall, then he can ride the ride

 //Create a variable to hold the kids height

 var kidHeight = 44;

 //add a sneaker lift
 var sneakerLift = 2;

 //Create a variable for a kid min height
 var minHeight = 48;

 //If your parent goes on the ride with you - 45" and over  can ride
 var wParentHeight = 45;

 //If statement
 if(kidHeight > minHeight){

  //True code goes here
  console.log("Congrats, you're tall enough to ride!");

 } else if(kidHeight>= wParentHeight){
  console.log("You can right, but with your parent, loser.")

 } else if (kidHeight+sneakerLift >48){
  console.log("You can ride the ride, you cheater!");

 } else {
  //False code goes here
  console.log("Sorry kid, you're too short. Try again next time!");
 }


 //If you have multiple "if" statements then you need "else ifs" because then
 //it will read and output both because of how it reads it.





























