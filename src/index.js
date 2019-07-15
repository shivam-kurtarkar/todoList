
let todoList = []

const addToList = (message, todoList)=>{
	let todoObject = {
		message: message,
		isDone: false
	}
	todoList.push(todoObject);
	return todoList;
}

const toggleDone = (index, todoList)=>{
	let todoElement = todoList[index];
	todoElement.isDone = !todoElement.isDone;
}
const clearList = (todoList)=>{
	todoList.length = 0;
}
const removeElement = (index, todoList)=>{
	//let index = todoList.indexOf(todoElement);
	todoList.splice(index,1);
}
const displayList = (todoList)=>{
	for (let i=0; i<todoList.length; i++){
		console.log(`${todoList[i].isDone} ${todoList[i].message}`);
	}
}

// Testing
//addToList("message 1", todoList)
//addToList("message 2", todoList)

//toggleDone(todoList[1])
//removeElement(1, todoList)
//displayList(todoList)



