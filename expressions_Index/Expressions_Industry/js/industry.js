
 /*
Yanely Ramirez
Title
WPF 1411
Date
 */

//alert("Testing 1,2,3!");

//What kind of question will you be figuring out from the industry aspect?
 //How much money will you earn after months of blood, sweat, and tears based on weeks?

 //Ask how many hours will you work?
 var hours = prompt("How many hours will I have worked this week?");
 console.log("You will work "+ hours + " hours in a week.");

 //Ask how much you will get paid by the hour
 var money = prompt("How much will you get paid an hour?");
 console.log("You will get paid $"+ money + " an hour.");

 //Ask how many months you will be working
 var months = prompt("How many months will you be working?");
 console.log("You are going to be working "+months+" months.");

 //Calculate how much money will be earned at the end.
 var totalMoney = parseInt(hours) * Number(money) * parseInt(months);
 console.log("You will get paid $" + totalMoney + " at the end of "+months+" months.");

//Finished

 