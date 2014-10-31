/**
 * Created by yxnely on 10/31/14.
 */

//Single Line Comment

/*
Multi- line comment
You can make it as large as you want

 */

alert("Hello World!");

//Console Log
//Programmers to show variables and code
console.log("This is the console. Can you see it?");

//Declare a variable
//Use the keyword of var
var whatEver1; //Declaration

//Set the value of the variable
whatEver1 = 42 ; //Definition

//Storage Container = value

//Setup a variable and define it in the same line
var a = 2;  //Declare and Define
console.log(a);

a+3;
console.log(a);

a= a+3;
console.log(a);

//Declare a variable b
var b;

//Define the value of b
b= a+3;
console.log(a);
console.log(b);

//Simple Math
//How old we are
//2014-year we were born

var yearBorn = 1996;

//Calculate your age
var myAge = 2014 - yearBorn;

//Tell the user how old
console.log(myAge);

//Talk about MATH!!

// +, -, *, /

//Find the area of a triangle
//Base * Height /2

var base = 20;
var height = 15;

var areaTriangle = base * height /2;

console.log(areaTriangle);

//Modulo - %
//Gives the remainder left over
var remainder = 32%10;

console.log(remainder);

//Find out if its odd or even
//1 - odd number
//0 - even number

var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment operators
/*
= - Assigns the value to the variable
++ Add 1 to the value of the variable
-- Subtracts 1 to the value of the variable
+= Adds the number to the value of the variable
-= Subtracts the number to the value of the variable
/= Divides the value of the variable by the number
*= Multiply the value of the variable by number
 */

var x = 1;
x++; //the same as x = x+1
x--;
x+= 2; // x = x +2;
x-=1; // x = x-1
x/=2; // x = x/2
x*=8; // x = x*8
console.log(x);

//Strings
// Text Fields
// MUST start and end in matching quotes
//Either ' or "

//Declare and define a string variable

var kermit = "light green";
var frogName = kermit;

console.log(frogName);

//Why should I bother with a single or double quote
//Escape character  - \backslash in front of the character
//Multiline break \n New Line Character

var phrase = 'I don\'t know \nYou never know!';
console.log(phrase);

//Boolean
//Either contains true or false

var yes = true; // A true boolean

var nope = "True"; // THIS IS NOT A BOOLEAN

var lightSwitch = false;

//Order of Operations
//PEMDAS - Please Excuse my dear aunt sally
// Parenthesis, Exponents, Multiply, Divide, Add, Subtract

//Find Quiz Averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//Average add up then divide by how many
var averageQuiz = (quiz1 + quiz2 + quiz3)/3;
//A rookie mistake is to WAY overuse parenthesis!

console.log(averageQuiz);

//Calculate the perimeter of a rectangle
// 2* width + 2* length
var width = 6;
var length = 7;
var perimeterRect = 2* width + 2* length;
console.log(perimeterRect);

//Concatenation - Combine Strings Together

var firstName = "Kermit";
var lastName = "The Frog";

//Concatenate these two variables into one
var fullName = firstName+" "+lastName;
console.log(fullName);

var d = "6";
var e = "7";
var combine = d+e;
console.log(combine);

var f = 8;
var g = "4";

var combine2 = f+g;
console.log(combine2);

//Concatenate variables
//Strings as well

var together = "The results of adding numbers is "+combine;

console.log(together);
















