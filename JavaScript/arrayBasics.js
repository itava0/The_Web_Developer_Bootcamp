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

//Concat Method
let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];

console.log(cats.concat(dogs));

//Includes Method
console.log(`Those cat's array has kitty ${cats.includes("kitty")}`);

const myEggs = ["brown", "white"];
myEggs.splice(1, 0, "eggWhites");
console.log(myEggs);


//Multi-Dimensional Arrays
const MyColors = [
  ["red", "orange", "yellow"],
  ["blue", "green", "white"],
  ["purple", "golden rod", "olive"]
];

const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = "Hugo";

console.log(airplaneSeats);

// Nesting array and object

const data = {
  kind:"Listing",
    data: {
      dist:25,
      children: [
        "Carlos",
        "Jeff",
        "Thomas"
      ]
    }
  };

console.log(data['data']['children']);