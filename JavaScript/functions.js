// Writing Your Own Functions

// Simple Square Function in Javascript
// function square(x) {
//   var ans = x * x;
//   return ans;
// }

// var y = square(4);

// console.log(y);

// Simple Substraction Function in Javascript
function sub(a, b) {
  return a - b;
}
console.log(sub(150, 200));

// Write your function here:
function printHeart() {
  console.log("<3");
}

printHeart();

function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}

rant("I hate walking");

function isSnakeEyes(firtDice, secondDice) {
  if (firtDice === 1 && secondDice === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

isSnakeEyes(1, 1);
isSnakeEyes(1, 5);

function lastElement(arg) {
  if (arg.length === 0) {
    return null;
  }
  return arg[arg.length - 1];
}

console.log(lastElement([]));

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("washington"));

function sumArray(arg) {
  let total = 0;
  for (let i = 0; i < arg.length; i++) {
    total += arg[i];
  }
  return total;
}

console.log(sumArray([10, 10, 10]));

function returnDay(day){
  let daysWeek = ["Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday", "Sunday"];
 if (day < 1 || day > 7) {
     return null
 }
 return daysWeek[day - 1];
}

console.log(returnDay(6));

//Higher Order Functions
function callTwice(func) {
  func();
  func();
}

function rollDice() {
  //Creating a ramdon number fom 1 to 10;
  const roll = Math.floor(Math.random() * 10) + 1;
  console.log(roll);
}

//calling the higher function
callTwice(rollDice);

//Returning Functions
function makeBetweenFunc(min,max) {
  return function(num) {
    return num >= min && num <= max;
  }
}

const isElderToDrink = makeBetweenFunc(21, 120);

console.log(isElderToDrink(19));

//Methods Exercise

const square = {
  area(num) {
      return num * num;
  },
  perimeter(num) {
      return num * 4;
  }
}

console.log(square.perimeter(30));

// "This" IN METHODS

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
      this.eggCount++;
      return "EGG";
  }
}

console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.eggCount);