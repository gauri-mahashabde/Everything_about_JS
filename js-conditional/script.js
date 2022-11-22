//Conditional statements are used to decide the flow of execution based on different conditions.
//If a condition is true, you can perform one action and if the condition is false, you can perform another action.
//if statement

var age = 15;

if (age > 18) {
    //console.log("qualifies for voting")
}

//else statement

var age1 = 23;

if (age1 > 18){
    //console.log("qualified")

}
else {
    //console.log("Not qualified")
}


var time = 17;

if (time < 18) {
    //console.log("Good day");
  } else {
    //console.log("Good evening") ;
  }

  //else if

  var marks = 95;

  if (marks > 90 && marks <= 100){
    console.log("Grade-A+");
  }
  else  if (marks > 80 && marks <= 90){
    console.log("Grade-A");
  }
  else  if (marks > 70 && marks <= 80){
    console.log("Grade-B+");
}
else  if (marks > 50 && marks <= 60){
    console.log("Grade-B");
}
else  if (marks > 40 && marks <= 50){
    console.log("Pass");
}
else  if (marks > 30 && marks <= 40){
    console.log("Fail");
}

  else {
    console.log("Absent");
  }

  const cups = 10;


  let ages = 15;
if(ages > 18){
 console.log("eligible to vote");
}
else {
  console.log("not eligible for voting");
}

//switch statement
//Use the switch statement to select one of many code blocks to be executed.
//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, the default code block is executed.
/*switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}*/

switch(new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";

}
console.log(day);


//The break and continue statements are the jump statements that are used to skip some statements inside the loop
// or terminate the loop immediately without checking the test expression.
//These statements can be used inside any loops such as for, while, do-while loop.
//break
//he break statement "jumps out" of a loop.

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
 // text += "The number is " + i + "<br>";
 // console.log(i);
}
//continue statement
//skips the current iteration and control flow jumps to the updateExpression.


for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
 // text += "The number is " + i + "<br>";
  console.log(i);
}


