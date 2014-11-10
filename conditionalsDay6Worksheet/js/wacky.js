
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


     //Let's make this into a game that checks how smart we are.
     //So let's ask some simple questions.

     alert("We are going to check what your age is depending on how you answer these simple questions! :)");

     //Ask question one.
     var quest1 = prompt("What is the sum of 2+2?");

     if(quest1 == 4){ // We are testing to see if the user inserted the correct answer.
         console.log("Okay! Next question!");

         //Ask a second question! This time, harder (twss).
         var quest2 = prompt("What is 12 * 12?");

         if(quest2 == 144){ // We are testing to see if the user inserted the correct answer.
             console.log("Okay! Next question!");

             //Ask a third question (level 3)
             var quest3 = prompt("What is (3 * 3) + 24");

             if(quest3 == 33){
                 console.log("Okay! Next question!");

                 //Ask a fourth question!
                 var quest4 = prompt("What is (6*7) + (121/11) + 150?");

                 if(quest4 == 203){
                     console.log("Okay! Next question!");

                     //Ask a fifth question
                     var quest5 = prompt("What is the capital of Florida?");

                     if(quest5 == "Tallahassee"){
                         console.log(prompt("You are correct! Congratulations, you are the smartest person in the world!"));

                     } else { //Say this if they answered incorrectly
                         console.log(prompt("I'm sorry you are incorrect. Your brain age is 18"));
                     }

                 } else { // say this if the question was answered incorrectly.
                     console.log(prompt("I'm sorry you are incorrect! Your brain age is 15"));

                 }

             } else { // Say this if the question was answered incorrectly.
                 console.log("I'm sorry you are incorrect! Your brain age is 10!");

             }

         } else { // Say this if the question was answered incorrectly.
             console.log("I'm sorry you are incorrect! Your brain age is: 4 years old.");


         }

     } else { // Say this if the question was answered incorrectly.
         console.log("I'm sorry you are incorrect! Your brain age is: 2 years old.");
     }
     

 } else if (age<10){ // If the player is younger than 10 then they are not able to play.
  console.log("Sorry, you are not old enough to play this game! :(");

 } else { // If the player enters something silly then they are prompted to enter a real number
  console.log("Please enter a real age.");

 }
























