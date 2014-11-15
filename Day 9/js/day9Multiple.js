
 /*
Yanely Ramirez
Combining Functions
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");

 //Figure out how much pizza cost per sq
 //and how much per slice

 //Prompt the user for:
   //Radius of pizza
   //Cost of pizza
   //# of slices in the pizza

 var pizzaRadius=prompt("What is the radius of your pizza?");
 var pizzaCost = prompt("How much does your pizza cost in total?");
 var pizzaSlices = prompt("How many slices are in your pizza?");

 //Function call our LORD FUNCTION!
 var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);
 console.log("Your pizza costs $"+results[0]+" per sq inch or $"+results[1]+" per slice.");

 //Create a function to start all other functions
 function lordFunction(radius, cost, slices){

  //Function call the other 3 functions and then return the values
  var area = pizzaArea(radius);

  var areaCost = pizzaSqInCost(area, cost);

  var slicePrice = pricePerSlice(slices, cost);

  return [areaCost, slicePrice];

 }

 //Function that calculates the area of the pizza
 //Function that calculates the price per square inch
 //Function that calculates the price per slice

 function pizzaArea(rad){

  var area = rad*rad*Math.PI;
  return area;

 }

 function pizzaSqInCost(area, price){

  var costPerIn = price/area;

  //round to 2 decimals
  costPerIn = costPerIn.toFixed(2);
  return costPerIn;

 }

 function pricePerSlice(slices, price){

  var costPerSlice = price/slices;

  //Round to 2 decimals
  costPerSlice = costPerSlice.toFixed(2);
  return costPerSlice;


 }

