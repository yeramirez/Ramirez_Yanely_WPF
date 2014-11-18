
 /*
Yanely Ramirez
Industry
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");

 //Find an industry problem to solve

 //Roofing Problem:

 //Given

 var roofWidth = 120;

 var roofLength = 120;

 var roofArea = roofLength*roofWidth;

 console.log("The area of your roof is "+roofArea+" inches.");

 alert("You will be able to insert numbers and check to see if it meets the requirements based on a square house.");

 var userWidth = prompt("What is your desired width?");

 //Validate the users response
 while(userWidth ==="" || isNaN(userWidth)){

  userWidth = prompt("Please only type in numbers and don't leave blank!\nEnter a height.");

 }

 var userLength = prompt("What is your desired length?");

 //Validate the users response
 while(userLength ==="" || isNaN(userLength)){

  userLength = prompt("Please only type in numbers and don't leave blank!\nEnter a height.");

 }

 //Insert a function
 function area (length, width){

  //Insert what you want to do with your numbers
  var area = length * width;

  //Now return your results
  return area;

 }

 //Function Call
 var userRoofArea = area(userLength, userWidth);

 //Console.log your results
 console.log("The area of your roof is "+userRoofArea+" inches.");

 if(userRoofArea>roofArea){

  //Console.log the if statement
  console.log("Your roof is okay to be on your house!")

 } else if(userRoofArea<=roofArea){

  //Console.log your results
  console.log("Your roof is NOT okay to be on your house!");
 }








