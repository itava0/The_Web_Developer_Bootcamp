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