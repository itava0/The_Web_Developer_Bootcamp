//Repeating Steps: For Loops
// for ( var pixel of Image.values()) {
//   var newG = 255 - pixel.getGreen();
//   pixel.setGreen(newG);
// }

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const animals = ['lions', 'elephan', 'tiger', 'bear'];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for(let i= 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

// Nested Loops
 const seatingChart = [
    ['Kristen', 'Erick', 'Nathan'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Gisel']
 ]

 for (let i = 0; i < seatingChart.length; i++) {
   const team = seatingChart[i];
    console.log(`Team #${i + 1}`)
   for (let j = 0; j < team.length; j++) {
     console.log(team[j]);
   }
 }