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