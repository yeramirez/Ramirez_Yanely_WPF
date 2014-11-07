
 /*
Yanely Ramirez
Nesting If Statements
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3!");


//Some decisions depend on other decisions

 //For example: If it is warm let's go to the beach, if not let's go to the movies
 //If the water is warm enough, let's go swimming, if not let's just lay out and get a tan


 //Get temp
 var temp = 69;

 //Get the water temp
 var waterTemp = 60;

 //If else statement
 if(temp>70){
  console.log("Let's go to the beach!");

 } else {
  console.log("Let's go to the movies!");

 }


 //Test the water temp
 if(waterTemp>75){
  console.log("Let's go swimming in the water!");

 } else{
  console.log("Let's lay out and get a tan!");

 }