//use local storage in this 11:04:15 Kg Coding ...

let todoList = [
    {
        item: 'Buy Milk',
        dueDate: '4/10/2023'
    },
    {
        item: 'Go to College',
        dueDate: '4/10/2023'
    }
];      //by default

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todoList.push({ item: todoItem, dueDate: todoDate });        //push entered value in array

    inputElement.value = '';        //make the variable empty again to use it again
    dateElement.value = '';        //make the variable empty again to use it again

    displayItems();
}

function displayItems() {

    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
            
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class = "btn-todo" onclick = "todoList.splice(${i},1); displayItems();">Delete</button>        
            
        `;
    }               //we are calling display items to show updated data

    containerElement.innerHTML = newHtml;
}

