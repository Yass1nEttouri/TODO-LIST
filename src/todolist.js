
// Modules imported
import { getUsers,getTodos,postUser,deleteUser } from "./module-dataAPI.js";
import getCurrentDate from "./module-currentDate.js";

const taskDescription = "";
const toggleFavtask = false;
const toggleCompletetask = false;
const toggleDeletetask = false;

// Task object
let task = {
    taskDesc : taskDescription,
    timestamp : getCurrentDate(),
    favoriteTask: toggleFavtask,
    completed: toggleCompletetask,
    deleted : toggleDeletetask
}

let creationDate = task.timestamp;
console.log("Data:", creationDate);

function printWelcomeMsg(){
    const welcomeMsg = document.getElementById("welcome-message");
    welcomeMsg.style.display = "block";
    setTimeout(()=>{
        welcomeMsg.style.display = "none";
    },3000);
}

async function useUsers() {
    const utenti =  await getUsers();
    utenti.forEach((user) => {
        console.log(`utente ${user.name} with id ${user.id}`);
    });
}



async function useTodos(){
    const todos = await getTodos();
    todos.forEach((todo) => {
        if(todo.id <= 20){
            const taskContainer = document.querySelector('.task-content');
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.innerHTML = 
            `<div class="task-info">
                <div class="cbox">
                    <input type="checkbox">
                </div>
                <div class="info">
                    <p class="description">${todo.taskDesc}</p>
                    <p class="time-stamp">${todo.timestamp}</p>
                </div>
            </div>
            <div class="operations">
                <button class="fav">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="svg" fill="none">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                </button>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`;
            taskContainer.appendChild(taskDiv);
            
            /* console.log(`todo ${todo.id}: ${todo.taskDesc} `); */
        }
    })
}


function addNewtask(){
    document.querySelector('.add-task').addEventListener('click',() => {
        const form = document.querySelector('.task-form-container');
        if(!form)
            console.error("form not found in addNewtask()");

        form.style.display = "block";

        // close form
        document.querySelector('.cancel').addEventListener('click',() => {
            form.style.display = "none";           
        })
    })
}
addNewtask();


function addTofavorites(){
    // Event delegation for dynamically created elements
    document.querySelector('.task-content').addEventListener('click', function(event) {
        if (event.target.closest('.fav')) {
            addTofav(event);
        }
    });

    // handle add task to favorites
    function addTofav(event){
        // find the SVG element within the clicked `.fav` button
        const favSvg = event.target.closest('.fav').querySelector('.svg');
        if (favSvg) 
            favSvg.classList.toggle('fill');
    }
}


// delete task handler
function deleteTask(){
    //....
}


// sidebar operations handler
function handleHyperlinks(){
    document.querySelector('.content').addEventListener('click', (event) => {
        if(event.target.matches('#i0')){
            //actions
        }
        if(event.target.matches('#i1')){
            //actions
        }
        if(event.target.matches('#i2')){
            //actions
        }
        if(event.target.matches('#i3')){
            //actions
        }
    })
}




// Call functions
printWelcomeMsg();
handleHyperlinks();
addTofavorites();
deleteTask();

useTodos();
useUsers();
postUser();
deleteUser();