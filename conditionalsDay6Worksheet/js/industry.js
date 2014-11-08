
 /*
Yanely Ramirez
Industry - Conditional
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3!");

 //Find a problem to solve, you will be a problem solver today!
 //I am going to a web conference in Downtown Orlando and I have to pick the perfect outfit to recruit clients.

 //Give options
 var shirtColor = ["Red", "Blue", "Black", "White"];

 //Ask the user to choose between the four colors
 var colorPick = prompt("Please choose between these colors: " + shirtColor[0]+", "+shirtColor[1]+", "+shirtColor[2]+", "+shirtColor[3]);

 console.log("User input color: " + colorPick);

 //Make an if for if they pick either or of a shirt.
 if(colorPick == shirtColor[0] || colorPick == "red"){
  console.log("With a red shirt you should wear a black pencil skirt with red heels.");

 } else if(colorPick == shirtColor[1] || colorPick == "blue"){
  console.log("With a blue shirt you should wear a black pencil skirt with blue heels.");

 } else if(colorPick == shirtColor[2] || colorPick == "black"){
  console.log("With a black shirt you should wear a black pencil skirt with black heels.");



 } else if(colorPick == shirtColor[3] || colorPick == "white"){
  console.log("With a white shirt you should wear a black pencil skirt with white heels.");

 } else {
  console.log("Error: Please input a color!");

 }




