
 /*
Yanely Ramirez
Circumference
WPF 1411
11-12-2014
 */

//alert("Testing 1,2,3!");

 //Calculate the circumference of a circle

 //var radius = prompt("Please assign a radius to your circle!");

 //Let's validate to see if it fits

 //while(radius ==="" || isNaN(radius)){

  //radius = prompt("Please only type in numbers and don't leave this space blank!\nEnter a radius in numerical value.");

 //}


 //Let's check the result
 //console.log("The circumference of your circle is: " + circumference + "!");


 userPrompt = prompt("Please assign a radius to your circle.");

 while(userPrompt ==="" || isNaN(userPrompt)){

  userPrompt = prompt("Please only type in numbers and don't leave this space blank!\nEnter a radius in numerical value.");

  }
 

function circumference(userPrompt){
 var circumference = Number(userPrompt) * 2 * Math.PI;
 return circumference;

}

circumference(userPrompt);
 results = circumference(userPrompt);


 console.log("The circumference of your circle is: " + results + ".");
