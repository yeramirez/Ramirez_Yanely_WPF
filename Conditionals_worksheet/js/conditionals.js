
 /*
Yanely Ramirez
Conditionals
WPF 1411
10-05-2014
 */

//alert("Testing 1,2,3!");

 //Determine if you can make it without stopping for gas, or nah.

 //How much efficiency does your car get (mpg)?
 var gasEfficiency = 32;

 //How many gallons can your car hold (g)?
 var gasCapacity = 10;

 //How much do you have in your tank (%)?
 var gasInTank = .75;
 var gasInTankGallons = gasInTank * gasCapacity;


 //Make an equation to find out how many miles you can travel until you are empty.
 var miles = gasInTankGallons * gasEfficiency;

 //If statement
 if(miles>=200) {
  console.log("Yes, you can make it without stopping! You go Glen Coco!")

 } else {
  console.log("You only have " + gasInTankGallons + " gallons left in your tank! You better get gas now while you can!")
 }




