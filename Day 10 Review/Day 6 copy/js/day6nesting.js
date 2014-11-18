
 /*
Yanely Ramirez
Nesting If Statements
WPF 1411
11-07-2014
 */

//alert("Testing 1,2,3!");


//Some decisions depend on other decisions

 //For example: If it is warm let's go to the beach, if not let's go to the movies
 //If the water is warm enough, let's go swimming, if not let's just lay out and get a tan

 //Choose between kids movie or horror - are you taking a child


 //Get temp
 var temp = prompt("What is the temperature outside?");

 //Get the water temp
 var waterTemp = 60;

 //Are you taking a child?
 var child = true;

 //If else statement
 if(temp>70){
  console.log("Let's go to the beach!");

     waterTemp = prompt("What is the temperature of the water?");


      //Test the water temp
      if(waterTemp>75){
      console.log("Let's go swimming in the water!");

      } else{
      console.log("Let's lay out and get a tan!");

      }


 } else {
  console.log("Let's go to the movies!");

  if(child){
   var childAge = prompt("How old is the child?");

   if(childAge<=6){
    console.log("Let's see a smurf movie.")


   } else{
    console.log("Go see Indiana Jones.");

   }



  }else{
     console.log("Bring the blood. It's time for horror!")
  }

 }

  //using && and || or
 if(temp>70 && waterTemp>75){
   console.log("Let's go to the beach!\n Let's go swimming");

  } else if(temp>70 && waterTemp<=75){
   console.log("Let's go to the beach! \n Let's get a tan!");

  } else if(temp<=70 && child){
   console.log("Let's go to the movies!\n Let's see an animated movie!");

 } else if (temp<=70 && !child){
  console.log("Let's go to the movies! \n Let's see a horror movie!")

 }









