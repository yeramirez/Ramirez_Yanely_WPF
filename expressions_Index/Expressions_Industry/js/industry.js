
 /*
Yanely Ramirez
Title
WPF 1411
Date
 */

//alert("Testing 1,2,3!");

//What kind of question will you be figuring out from the industry aspect?
 //How much money will you earn after months of blood, sweat, and tears based on months?

 //I am charging for projects
 var projects = [250, 500, 325, 400];
 var totalProjects = projects[0] + projects[1] + projects[2] + projects [3];
 console.log(totalProjects);

 // How many clients per project
 var clientOne = projects[0];
 console.log("Client one has $" + clientOne+ " worth of labor.");
 var clientTwo = projects[1] + projects [2];
 console.log("Client two has $" + clientTwo+ " worth of labor.");
 var clientThree = projects[3];
 console.log("Client three has $" +clientThree+ " worth of labor.");

 //Calculating how much tax each client will have to pay.
 var taxOne = (projects [0] * .07) + projects[0];
 console.log("The total for client one is $" + taxOne + " including tax.");
 var taxTwo = (projects [1] *.07) + projects [1] + projects[2] + (projects [2] *.07);
 console.log("The total for client two is $" + taxTwo+ " including tax.");
 var taxThree = (projects [3] * .07) + projects[3];
 console.log("The total for client three is $" + taxThree + " including tax.");

 //Calculate how much was made this month.
 console.log("The total monthly income was $" + totalProjects + ".");
 //Phone number
 var areaCode = 407;
 var firstPart = 863;
 var secondPart = 6672;
 var phoneNumber = String(areaCode)+String(firstPart)+String(secondPart);
 console.log("If you'd like to contact me, call me at " + phoneNumber+".")



 