
 /*
Yanely Ramirez
Final Exam WPF
WPF 1411
11-19-2014
 */

//alert("Testing 1,2,3!");

 //A. Prompt the user for the cost of an item
 var costItem = prompt("Please enter the cost of an item (dollars).");

 //B. Validate the prompt is in fact a number and not left blank
 while(costItem ==="" || isNaN(costItem)){

  costItem = prompt("Please only type in numbers and don't leave blank!\nEnter a the cost of an item.");

 }
 console.log("The original cost of your item is $"+costItem+".");

 //C. Prompt the user for a discount in percentage from 0-100
 var discountItem = prompt("Please enter a discount percentage (use whole numbers).");

 //D. Validate the prompt is in fact a number between those values and not left blank
 while(discountItem ==="" || isNaN(discountItem) || discountItem<0 || discountItem>100){

  discountItem = prompt("Please only type in numbers and don't leave blank!\nEnter a discount percentage.");

 }
 console.log("The discount of your item is "+discountItem+"%.");

 //E. Create a function that will calculate the discounted cost of the product.
 //F. Use the cost and discount as the parameters
 function discountedCost (cost, discount) {

  //G. Equation is discount price = original cost * (discount / 100)
  var discountedPrice =  ((100 - discount) / 100) * cost;

  //H. Have the function return the discounted price
  return discountedPrice
 }

 //I. Create a function call, remember to use the arguments and to catch the return
 var newPrice = discountedCost(costItem,discountItem);

 //J. Console.log a text string that includes the returned price, original price, and discount %.
 console.log("The original price of your item was $"+costItem+".\nThe discount of your item was "+discountItem+"%.\nYour discounted price is now $"+newPrice+".");



