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
