
 /*
Yanely Ramirez
Grade Letter Calculator
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3!");

/*
 A+ 95-100 4.0
 A  90-94  3.5
 B+ 85-89  3.0
 B  80-84  2.5
 C+ 76-79  2.0
 C  73-75  1.5
 D  70-72  1.0
 F  0-69   0.0
 */

 //Declare and define the variable for the grade.
 var grade = prompt("What is your grade?");

 //If statements
 if(grade<=100 && grade>=95){
  console.log("A+!")

 } else if(grade<=94 && grade>=90){
  console.log("A!");

 } else if(grade<=89 && grade>=85){
  console.log("B+ :)");

 } else if(grade<=84 && grade>=80){
  console.log("B :)");

 } else if(grade<=79 && grade>=76){
  console.log("C+");

 } else if(grade<=75 && grade>=73){
  console.log("C");

 } else if(grade<=72 && grade>=70){
  console.log("D");

 } else if(grade<=69){
  console.log("F");

 }

