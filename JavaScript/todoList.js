let input = prompt('what would you like to do?');
const todos = ['Homework', 'Go to the bank'];
while(input !== 'quit' && input !== 'q') {
  if(input === 'list') {
    console.log('****List****')
    for(let i = 0; i < todos.length; i++){
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('************')
  } else if (input === 'new') {
    const newTodo = prompt('ok, what is the new todo?')
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === 'delete') {
    const index = parseInt(prompt('ok, enter an index'));
    if(!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`ok, deleted ${deleted[0]}`)
    } else {
      console.log('Unknown index, try again');
    }
  }
  input = prompt('what would you like to do?');
}

console.log('OK, you Quit the app');