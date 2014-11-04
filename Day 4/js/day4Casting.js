
 /*
Yanely Ramirez
Day 4 Casting
WPF 1411
11-3-2014
 */

//alert("Testing 1,2,3!");

//Casting variables - treat one variable type as another

 var stringVar = "6";
 var results = 7+stringVar;
 console.log(results);

 //To cast a variable as a number
 //Number () - anything inside of the () is treated as a number - if it makes sense

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //Casting numbers as a string
 //String() - treats anything inside as a text string

 //Phone number
 var areaCode = 407;
 var firstPart = 979;
 var secondPart = 1667;

 //Concatenate the phone number to ne variable

 var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
 console.log(phoneNumber);

 var phoneNumber2 = "("+areaCode+")"+firstPart+"-"+secondPart;
 console.log(phoneNumber2);

 //Parsing Integers
 //parseInt() - Looks through the text string and returns the integer in it.

 //Only the first number is returned
 //The number has to be the first thing in the text string
 //If parseInt can't find it - returns NaN
 //NaN - Not a Number

 var a = parseInt("40 Years 7 years ago");
 console.log(a);

 var b = parseInt("I am 40 years old.");
 console.log(b);

 //prompt() only returns text strings!!!

 var cupsHad = prompt("How many cups do you have?");
 var cupsBought = prompt("How many cups are you going to buy?");

 //add the number of cups I had plus that I am buying
 var totalCups = parseInt(cupsHad) + parseInt(cupsBought);
 console.log(totalCups);















