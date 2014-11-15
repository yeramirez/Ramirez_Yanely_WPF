
 /*
Yanely Ramirez
Day 9 Anonymous
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");


 /*
 basic function
 function functionName(){
   //code goes here

 }

 Anon function
 var functionName = function(){
   //code goes here

 };

 */

//A normal function to find the area of a triangle

 function triangleArea(base,height){

  var area = .5*base*height;
  return area;


 }

 //function call - for normal function
 var returnedArea = triangleArea(4,5);
 console.log("Returned area for a normal function is "+returnedArea);


//Anonymous function that calculates triangle area
 var anonTriArea = function (base, height){
    var area = .5*base*height;
    return area;

 };

 //Function call for a non funtion
 var returnedAnonArea = anonTriArea(2,3);
 console.log("The returned area from the anon function is "+returnedAnonArea);






















