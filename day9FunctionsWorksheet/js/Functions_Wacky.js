
 /*
Yanely Ramirez
Wacky
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");

 //Make up a wacky problem!

 //Let's calculate the volume of a Pringles can and see if our arm can fit through it.
 //Let's calculate the volume of the can given the measurements.

 var radius = 1.5;
 var height = 10.5;

 //Let's set up the function

 function volume (radius, height){

  var volume = Math.PI * radius * radius * height;
  return volume

 }

 //Function Call
 var pringlesVolume = volume(radius, height);
 console.log("The radius of the can is "+radius+" inches.");
 console.log("The height of the can is "+height+" inches.");
 console.log("The volume of the Pringles can is " + Math.round(pringlesVolume) + " cubic inches.");


 //Now lets see if your hand will fit in the can!

 var hand = prompt("What is the radius of your fist? (horizontal-wise & in inches)");

 //Console the users prompt
 console.log(hand);

 //Make another variable to test the hand to can ratio
 var handInPringles;

 //Check to see if the hand will fit in the can
 handInPringles = (hand>=radius) ? "No! Abort mission! Your hand does not fit!" : "Yes, your hand will fit!" ;


 //By now you've realized that the volume had nothing to do with anything hahahahaha!
 console.log(handInPringles);

