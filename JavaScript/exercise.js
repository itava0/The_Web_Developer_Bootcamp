//Exercise 1 - Make a Phrase From Three Words

function phrase3words(a,b,c) {
  var answer = a + " " + b + " " + c;
  return answer;
}

var result1 = phrase3words("smile","at","everyone");
console.log(result1); 
var result2 = phrase3words("everyone","wave", "back");
console.log(result2); 
var result3 = phrase3words("coding","is", "fun");
console.log(result3);

//Exercise 2 - Format a name

function reformatName(first,last) {
  var name = last + ", " + first;
  return name;
}

var result = reformatName("Susan", "Rodger");
console.log(result);
result = reformatName("Robert", "Duvall");
console.log(result);