// Writing Your Own Functions 

// Simple Square Function in Javascript
function square(x) {
  var ans = x * x;
  return ans;
}

var y = square(4);

console.log(y);

// Simple Substraction Function in Javascript
function sub(a, b) {
  return a-b
  }
  console.log(sub(150, 200))
  
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