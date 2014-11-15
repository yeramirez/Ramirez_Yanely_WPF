
 /*
Yanely Ramirez
Personal Function
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");

 //DISCLAIMER: I hate soda and am only doing this for the purpose of this assignment and no more.

 //Let's start a personal problem

 //Let's find the volume of a soda can
 //This is a personal problem for me because I like to drink a lot

 //Prompt the user on what their radius and height is for the can

 var radius = prompt("What is the radius of your can (inches?");

 //Make sure to validate the number given

 while(radius ==="" || isNaN(radius)){

  radius = prompt("Please only type in numbers and don't leave blank!\nEnter a radius.");

 }

 //Prompt the user on what their height is for the can

 var height = prompt("What is the height of your can (inches)?");

 //Make sure to validate the number given

 while(height ==="" || isNaN(height)){

  height = prompt("Please only type in numbers and don't leave blank!\nEnter a height.");

 }

 //Formula to calculate volume is: pi * r * r * h

 function volume (radius, height){

  var volume = Math.PI * radius * radius * height;
  return volume;



 }

//Function Call
var cylinderVolume = volume(radius, height);
console.log("The volume of your can is "+cylinderVolume+" cubic inches.");



 //To make it an Anonymous function, just add var! :D

 var cylVolume = function (radius, height){

  var volume = Math.PI * radius * radius * height;

  return volume;

 };

 var returnedCylinderVolume = cylVolume(radius, height);
 console.log("The returned volume of your can is " + returnedCylinderVolume + " cubic inches.");


