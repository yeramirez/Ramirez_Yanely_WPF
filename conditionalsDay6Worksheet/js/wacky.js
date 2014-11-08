
 /*
Yanely Ramirez
Wacky - Conditionals
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3!");

 //Let's play a game!

 var age = prompt("How old are you?");

 if(age>=10){ // We are testing how old the player is, if they are older than 10 then they can play.
  console.log("Okay, let's play a game!");

 } else if (age<10){ // If the player is younger than 10 then they are not able to play.
  console.log("Sorry, you are not old enough to play this game! :(");

 } else { // If the player enters something silly then they are prompted to enter a real number
  console.log("Please enter a real age.");

 }

 //Let's make this into a game that checks how smart we are.
 //So let's ask some simple questions.

 alert("We are going to check what your age is depending on how you answer these simple questions! :)");

 //Ask question one.
 var quest1 = prompt("What is the sum of 2+2?");

 if(quest1 == 4 || quest1 == "4"){ // We are testing to see if the user inserted the correct answer.
  console.log("Okay! Next question!");

 } else { // Say this if the question was answered incorrectly.
  console.log("I'm sorry you are incorrect! Your brain age is: 2 years old.");

 }

 //Ask a second question! This time, harder (twss).
 var quest2 = prompt("What is 12 * 12?");

 if(quest2 == 144 || quest2 == "144"){
  console.log("Okay!, Next question!")

 } else {
  console.log("I'm sorry you are incorrect! Your brain age is: 10 years old.");

 }

 //Ask a third question (level 3)


















 