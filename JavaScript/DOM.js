// How to select documents using an ID

//Select the image element by its id
const image = document.getElementById("unicorn");
//Select the hearder element by its id
const heading = document.getElementById("mainheading");
//Select all the images byt its tag name.
const allImages = document.getElementsByTagName("img");
//Select the img element by its classname;
const firstImage = document.getElementsByClassName("first_img");
//Select all the elements by its classname
const doneTodos = document.querySelectorAll(".done");
//Select the checkbox element by its id
const checkbox = document.querySelector("#scales");
//Select the span element and changed the text
document.querySelector("span").innerText = "Disgusting"
//Changing styles with JS
const p = document.querySelector('p');
p.style.fontSize = '2em';

const container = document.querySelector('#container');
container.style.textAlign = 'center';

const img = document.querySelector('img');
img.style.width = '150px';
img.style.borderRadius = '50%';

//Adding and Removing a Class
const list = document.querySelectorAll('li');
for(let i = 0; i < list.length; i++) {
   list[i].classList.toggle('highlight');
}

btn.onclick = function() {
  console.log('you have clicked the button');
}
 img.addEventListener