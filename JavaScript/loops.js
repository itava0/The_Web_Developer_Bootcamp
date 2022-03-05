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

 // The Lovely For Of Loop
 for( let row of seatingChart) {
   for(let student of row) {
     console.log(student);
   }
 }

 // Iterating Over Objects
 const testScore = {
   keenan: 80,
   damon: 67,
   kim: 89,
   shawn: 91,
   marlom: 72,
   dwayne: 77,
   nadia: 83,
   elvira: 97
 }
 
 let total = 0;
 for( let score of Object.values(testScore)) {
   total += score
 }

 console.log(total);