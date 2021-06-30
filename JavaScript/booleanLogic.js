//Boolean Logic

let rating = 3;

if (rating === 3) {
  console.log("You are an ALIEN!!!");
}

let num = Math.floor(Math.random() * 10) + 1;

//Created a function that checked is num is even or odd
function isEven(num) {
  if (num % 2 === 0) {
    return console.log(`the number ${num} is even!!!`);
  } else {
    return console.log(`the number ${num} is odd!!!`);
  }
}
isEven(num);

//***** Logical Operators *****

//Logical AND
const password = "dsjbsjbjsbj12";
if(password.length >= 6 && password.indexOf(' ') === -1) {
  console.log("VALID PASSWORD");
} else {
  console.log("INVALID PASSWORD");
}

//Logical OR
const age = 90;
if(age < 5 || age > 65) {
  console.log("FREE");
} else if(age < 10) {
  console.log("$10");
}