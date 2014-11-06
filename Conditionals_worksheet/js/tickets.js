
 /*
Yanely Ramirez
Movie Ticket Prices
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3!");

 //Determining if you can get the discount of $7
 //If you are a senior of 55+ you get the discount
 //If you are 10- you get the discount
 //If you watch the movie between 3pm-5pm you get the discount



 var child = 10;
 var senior = 55;

 var age = prompt("What is your age? We are going to determine if you are eligible for a discount!");
 if(age<=child || age>=senior){
  console.log("You are able to receive the discount and will only have to pay $7.00.")

 } else {
  console.log("I'm sorry, you cannot receive the discount.")
 }

 var showTime = prompt("What time will you watch the show?");
 if(showTime>2 || showTime<6){
  console.log("You are able to receive the discount and will only have to pay $7.00.");

 } else{
  console.log("I'm sorry, you cannot receive the discount.");

 }

 console.log("If you are able to recieve the discount at least once, then you are able to receive the discount. If you are able to\n" +
 "receive the discount 'twice' then you are only able to use it once.");