//const todo = ['go to gym', 'js bootcamp', 'ethereum course', 'snacks', 'c++ course'];
//console.log(`you have got to do ${todo.length} todos`);
/*
for (let i=0; i < todo.length; i++) {
    console.log(todo[i] + ' ');
}

todo.splice(2,1);

console.log(todo);

todo.push('dinner');

todo.shift();

console.log(todo);
*/

/*todo.forEach(function (item, index){
    console.log(`${index + 1}. ${item}`)
})*/


const todo = [{title: 'go to gym', completed: true}, 
            {title: 'js bootcamp', completed: false}, 
            {title: 'ethereum course', completed: true},
            {title: 'snacks', completed: false },
            {title: 'c++ course', completed: true}];

const deleteTodo = function (todo, textValue) {
    const index = todo.findIndex(function (todolist) {
        return todo.title.toLowerCase() === textValue.toLowerCase()
    })
    return index;

}

//console.log(deleteTodo(todo, 'js bootcamp'));

//console.log(todo);

const getThingsDone = function (todos) {
    return todos.filter(function (todos, index){
        return todos.completed === false;
    })
}

//console.log(getThingsDone(todo));

const sortTodos = function (todos) {
    return todos.sort(function (a, b) {
        if (a.completed < b.completed){
            return 0;
        }
        else return 1;
    })
}

console.log(sortTodos(todo));