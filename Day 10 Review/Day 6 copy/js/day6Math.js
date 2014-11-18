
 /*
Yanely Ramirez
Math Class
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3!");

 //Normal Round
 //.5+ goes up, else goes down.

 var num1 = prompt("Enter a number!\nWe are going to round it.");

 //Validate the number
 while(num1 ==="" || isNaN(num1)){

  num1 = prompt("Please only type in numbers and don't leave blank!\nEnter a number.");

 }

 console.log (num1);
 console.log(Math.round(num1));

 //Floor round
 //Always rounds down

 var num2 = prompt("Please enter a number!\nWe are going to round it down!");

 //Validate
 while(num2 ==="" || isNaN(num2)){

  num2 = prompt("Please only type in numbers and don't leave blank!\nEnter a number.");

 }

 console.log(num2);
 console.log(Math.floor(num2));

 //Ceiling Round
 //Always rounds up!

 var num3 = prompt("Please enter a number!\nWe are going to round it up!");

 //Validate
 while(num3 ==="" || isNaN(steakTemp)){

  steakTemp = prompt("Please only type in numbers and don't leave blank!\nEnter a steak temp.");

 }

 console.log(num3);
 console.log(Math.ceil(num3));

 //How to get specific number of decimals
 //toFixed - not part of Math

 var num4 = 6.7893;

 console.log(num4);
 console.log(num4.toFixed(2));

 //Random Numbers
 //Math.random() - gives values between 0 and almost 1
 //Nothing goes inside the ()

 var num5 = Math.random();

 console.log(num5);

 //Number 0 - 10

 var num6 = Math.random()* 10;

 console.log(num6);

 //Integers between 0 - 1

 var num7 = Math.round(Math.random() * 10);

 console.log(num7);

 //Integers between 0 - 1

 var num8 = Math.round(Math.random() * 100);

 console.log(num8);

 //Get a random integer between any 2 values
 //Math.random() * (max-min) + min

 //Random between 50 - 80

 var num9 = Math.round(Math.random() * (80-50) + 50);

 console.log(num9);

 //Prompt the user for a max and min number
 //Then find the random number between them

 var min = prompt("Let's find a random number! What's the max number?");
 var max = prompt("Please type in a minimum number?");

 //Find the random integer
 var randomNum = (Math.random() * (max - min) + parseInt(min));

 console.log(randomNum);

 console.log("Your random number is "+randomNum+".");

 //Math class constant
 //Number that never changes
 //Always uppercase
 //Math.PI - 3.14159.....
 //Circum of a circle
 //2 * pi * pi

 var radius = 7;

 var circleArea = 2*Math.PI * radius;

 console.log(circleArea);























