
 /*
Yanely Ramirez
Validating Loops
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3!");

 //Make up a problem for the user to solve

 //Let's determine how much time it takes to listen to our playlist


 //We will first prompt the user for a amount of time (that they will listen to music)

 var songs = prompt("How many songs are on your playlist?");

 while(songs ==="" || isNaN(songs)){

  songs = prompt("Please only type in numbers and don't leave blank!\nEnter a number.");

 }

 //We will then prompt the user for the average time a song in the playlist

 var songTime = prompt("On average, how long are the songs you are listening to (minutes)?");

 while(songTime ==="" || isNaN(songTime)){

  songTime = prompt("Please only type in numbers and don't leave blank!\nEnter a number.");

 }

 //Now we will do the math

 var totalTime = (songs * songTime) / 60;

 console.log("Your playlist will take " + totalTime + " hours.");

 