// Basic Data Structures

//An array of strings
let colors = ["red", "orange", "yellow"];

console.log(colors.length);
console.log(`I love ${colors[2]}`);

//Array Methods

//Added a new color to the array
colors.push("blue");
colors.push("white");
console.log(colors);


//Removed the last color from array
colors.pop();
console.log(colors);

//Removed the fist color from array
colors.shift();
console.log(colors);

//Removed the fist color from array
colors.unshift("pink");
console.log(colors);