//Objects are collections of properties
//Properties are a key value pair

const person = {
  firstName: 'Mick',
  lastName: 'Jagger',
  age: 27,
  weight: 195,
  height: 5.8
}

console.log(`what's your name? ${person.firstName}`);

const restaurant = {
  name: 'Ichiran Ramen',
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: 'Brooklyn',
  state: 'NY',
  zipcode: '11206',
}

let fullAddress = `${restaurant['address']}, ${restaurant['city']}, ${restaurant['state']}, ${restaurant['zipcode']} `;

console.log(fullAddress);

const midterms = {
  carlos: 90,
  thomas: 60
}

midterms.carlos = 60;