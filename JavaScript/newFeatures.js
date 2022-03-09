//spread in function calls
const nums = [2,3,52,31,31,35,58,1452,412,65122,12];
//Using the spread to separate the array into individual arguments
console.log(Math.max(...nums));

//Rest Params
// groups together the arguments into an array
const sum = function (...nums) {
  return nums.reduce((total, num) => {
          return total + num;
  })
}

console.log(sum(3, 5, 9));

//Destructuring 
//Allow to make a copy of single values inside an array

const scores = [5236,2521,2581,2115,2545,2511];

//Old way 
const highScore = scores[0];
//Destructuring
const [highScores] = scores;