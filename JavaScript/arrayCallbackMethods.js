//FOREACH
const numbers = [3,5,89,36,892,2891,10,]

//Build in Method to Loop over.
numbers.forEach( function (el) {
  if( el % 2 === 0) {
    console.log(el);
  }
})
 //Map creates a new array with the result.
const doubles = numbers.map((num) => {
    return num * 2;
})

console.log(doubles[3]);


const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];


const firstNames = fullNames.map((names) => {
  console.log(`This is the array: ${names}`);
    return names.first;
})

console.log(firstNames);

//Filter Exercise 
const usernames = ['mark', 'staveysmon2361', 'carrier98', 'moanaf1']

function validUserNames(usernames) {
  return usernames.filter((str) => {
       return str.length < 10;
   })
}

console.log(`Valid usernames: ${validUserNames(usernames)}`);

//Checking if all the number inside the array are even!!
function allEvens(numbers) {
  //I'm checking if all the number inside the arry match condition
  return numbers.every((num) => {
    return num % 2 === 0;
  })
}

console.log(allEvens([2,4,6,8]));

//Reduce Method
const prices = [9.99, 1.50, 19.99, 39.99, 30.50];
//loops over the array and keeps track of the count.
 const total = prices.reduce((total, price) => {
          return total + price;
 })