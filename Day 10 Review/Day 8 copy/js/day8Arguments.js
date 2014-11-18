
 /*
Yanely Ramirez
Arguments and Parameters
WPF 1411
11-12-2014
 */

 //alert("Testing 1,2,3!");

 //Argument - goes into a function - part of the function call
 //Parameter - catches the argument and is used inside of the function



 //Create a function that calculates the area of a rectangle

 function calcArea(w, h){ // parameters goes here

  //Hardcoded values for width and height - not good!!
  //var width = 10;
  //var height = 20;
  //var area = width * height;

  var area = w * h;

  console.log("The area of your rectangle is " + area +".")

 }

 //function call
 calcArea(4,5); //Arguments go here

 calcArea(2,3); //New arguments here

 var width = prompt("Width: ");
 var height = prompt("Height: ");
 calcArea(width, height);

 //Calculate dog years

 //dog year = human years * 7

 function dogYears(humanAge){

  var dogAge = humanAge * 7;
  console.log("You are " + dogAge + " years old in dog years!");

 }

 //function call
 dogYears(18);
 dogYears(20);

 var yourAge = prompt("Please type in your age:");

 dogYears(yourAge);

 var fredsAge = prompt("How old is your friend Fred?");

 dogYears(fredsAge);















