
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

 var colorPick = prompt("Please choose between these colors: " + shirtColor[0]+", "+shirtColor[1]+", "+shirtColor[2]+", "+shirtColor[3]);

 console.log(colorPick);

 if(colorPick === shirtColor[0]){
  console.log(prompt("With a red shirt you should wear a black pencil skirt with red heels."));

 } else if(colorPick===shirtColor[1]){
  console.log(prompt("With a blue shirt you should wear a black pencil skirt with blue heels."));

 } else if(colorPick === shirtColor[2]){
  console.log(prompt("With a black shirt you should wear a black pencil skirt with black heels."));

 } else {
  console.log(prompt("With a white shirt you should wear a black pencil skirt with white heels."));
 }





