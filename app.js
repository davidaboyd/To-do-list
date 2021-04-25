//Selectors
const todoinput =document.querySelector(".todo-input");
const todobutton =document.querySelector(".todo-button");
const todoList =document.querySelector(".todo-list");

//Event Listeners 
todobutton.addEventListener("click", addtodo);
todoList.addEventListener("click", deletecheck);

//Functions
function addtodo(event){
    //prevent form from submitting
event.preventDefault();
//ToDo Div
const tododiv = document.createElement("div");
tododiv.classList.add('todo');
//create LI 
const newtodo= document.createElement('li');
newtodo.innerText = todoinput.value;
newtodo.classList.add('todo-item');
tododiv.appendChild(newtodo);
//completed button
const completedbutton = document.createElement('button');
completedbutton.innerHTML='<i class= "fas fa-check"> </i>';
completedbutton.classList.add("completed-btn");
tododiv.appendChild(completedbutton);
//Delete button
const deletebutton = document.createElement('button');
deletebutton.innerHTML='<i class= "fas fa-trash"> </i>';
deletebutton.classList.add("delete-btn");
tododiv.appendChild(deletebutton);
//Append to list
todoList.appendChild(tododiv);
//Clear todo input value
todoinput.value = "";

}
function deletecheck(e){
console.log(e.target);




}