
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
 var gasInTank = 63;
 var gasInTankGallons = (gasInTank * gasCapacity)/100;


 //Make an equation to find out how many miles you can travel until you are empty.
 var miles = gasInTankGallons * gasEfficiency;

 //If statement
 if(miles>=200) {
  console.log("Yes, you can make it without stopping! You go Glen Coco!");

  //If the car cannot travel 200 miles then this will tell the user that they should stop and fuel up on gas.
 } else {
  console.log("You only have " + gasInTankGallons + " gallons left in your tank! You better get gas now while you can!")
 }




