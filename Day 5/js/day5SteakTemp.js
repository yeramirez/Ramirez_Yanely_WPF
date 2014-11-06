
 /*
Yanely Ramirez
Steak Temperature Check
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3!");

 //Ask for steak temp and tell what steak preference
 /*
  Extra-rare or Blue 115-120
  Rare 	125-130
  Medium rare 130-140
  Medium 140-150
  Medium well 150-155
  Well done 160+
  */

//Declare and define the variable for steak temp
 var steakTemp = prompt("What temperature is your steak?");

 if(steakTemp<115){
  console.log("Uncooked Meat - Mooo!")

 } else if(steakTemp<=120){
  console.log("Your steak is Extra-Rare.");

 } else if(steakTemp<=130){
  console.log("Your steak is Rare.");

 } else if(steakTemp<=140){
  console.log("Your steak is Medium Rare.");

 } else if(steakTemp<=150){
  console.log("Your steak is Medium.");

 } else if(steakTemp<=155){
  console.log("Your steak is Medium Well.");

 } else if(steakTemp<=160){
  console.log("Your steak is Well Done.");

 } else{
  console.log("You burnt your steak. Hope you like it crispy.");

 }