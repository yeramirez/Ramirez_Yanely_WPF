
 /*
Yanely Ramirez
Random Number Function
WPF 1411
11-14-2014
 */

//alert("Testing 1,2,3!");

 //Create a normal or basic function that will take in
 //Normal or basic function RETURNS a value

 //a min and max number and return a random integer between them

 //Ask the user for a min and max variable

 var shouldRun = true;


 var min = parseInt(prompt("Let's find a random number between 2 values.\n What is minimum number?"));

 //Validate the users response

 while(min==="" || isNaN(min)){

  //Re-prompt the user for a valid response
  min = parseInt(prompt("Please do not leave blank and only use numbers."));

 }

 var max = parseInt(prompt("What is the maximum number?"));

 while(max === "" || isNaN(max) || min >= max){

  if(max === ""){
   //Re-prompt the user
   max = parseInt(prompt("Please don't leave this blank.\nWhat is the max value?"));

  } else if (isNaN(max)){
   //User did not type in a number
   max = parseInt(prompt("Please only type in numbers.\nWhat is the max value?"));

  } else if(parseInt(min)>=parseInt(max)){

   max = parseInt(prompt("Please type in a number larger that the minimum value!\nWhat is the max value?"));

  }



 }

 if(shouldRun) {

  //function call
  var returnedNumber = randomizer(min, max);
  console.log("Your random integer between " + min + " and " + max + " is " + returnedNumber + ".");

 }

 //Create an array to catch the returned integers
 var numbers = [];

 //Create a for loop and console.log 15 random integers

 for (var i=0; i<15; i++){
  numbers.push(randomizer(min,max));
  console.log(numbers[i]);

 }

 console.log(numbers);



 //Create a random number generating function
 function randomizer(mn,mx){

  //Create the variable to hold the random number
  //Math.random() * (max-min) + min
  var randomNumber = Math.round(Math.random() * (mx - mn) + Number(mn));

  //return the random number back to the main code
  return randomNumber;


 }



