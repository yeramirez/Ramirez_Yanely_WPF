
 /*
Yanely Ramirez
Circumference
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3!");

 //Calculate the circumference of a circle

 var radius = prompt("Please assign a radius to your circle!");

 //Let's validate to see if it fits

 while(radius ==="" || isNaN(radius)){

  radius = prompt("Please only type in numbers and don't leave blank!\nEnter a radius in numerical value.");

 }

 //Now lets calculate

 var circumference = Number(radius) * 2 * Math.PI

 //Let's check the result



