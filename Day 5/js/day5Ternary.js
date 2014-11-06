
 /*
Yanely Ramirez
Ternary
WPF 1411
11-05-2014
 */

//alert("Testing 1,2,3!");

 //If your GPA is greater than 2.0 then you graduate
 var gpa = 2.5;

 if(gpa>2.0){
  console.log("Congrats, you graduate!");

 } else {
   console.log("Sorry, study more!");

 }

 //Convert to a ternary
 //(Condition to test inside of it)? true code : else code ;
 (gpa>2.0) ? console.log("Congrats, you graduate!"): console.log("Sorry, study more!");

 //Set a variable equal to the outcome

 //Based on a kids age they will read one of two books
 //kids under ten read green eggs and ham
 //kids ten and older read the time machine

 var age = 16;
 var book;

 book = (age>=10) ? "The Time Machine" : "Green Eggs and Ham" ;

 console.log(book);

 //kids 14 and older read Twilight
 book = (age<10)? "Green Eggs and Ham": (age<14)? "The Time Machine" : "Twilight";
 console.log(book);

