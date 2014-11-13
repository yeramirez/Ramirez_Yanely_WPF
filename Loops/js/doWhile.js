
 /*
Yanely Ramirez
Do While
WPF 1411
11-11-2014
 */

//alert("Testing 1,2,3!");

 /*
 I recently used the phrase "monkeys jumping on the bed", but was not able to correctly code it because
 I did not know how to use loops quite yet, so here it is, correctly formatted...
 */

 //The user will be able to put in as many monkeys as they want on the bed.

 console.log("-------Loops-----");
 var monkeys = prompt("How many monkeys will be jumping on your bed?");

 while ( monkeys > 1){ // Checks to see the number of monkeys you entered
  console.log(monkeys + " monkeys jumping on the bed!");

  monkeys--; //The amount of decrements

 }


 var a = 1;

 do {

  console.log(a + " monkey jumping on the bed!");

  a--;

 }

 while(a < 0);

