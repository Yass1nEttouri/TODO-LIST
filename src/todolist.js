
// Module imported
import { useUsers,useTodos,postUser,deleteUser } from "./module-fetchdata.js";


const taskDescription = "";
const toggleFavtask = false;
const toggleCompletetask = false;
const toggleDeletetask = false;


// Task object
let task = {
    taskDesc : taskDescription,
    timestamp : function(){
        let currentDate = new Date();

        let year = currentDate.getFullYear(); 
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDate(); 
        let hours = currentDate.getHours(); 
        let minutes = currentDate.getMinutes(); 
        /* let seconds = currentDate.getSeconds(); */ 
                   
        let creationTimestamp = day + "/" + month + "/" + year + " - " + 
        String(hours).padStart(2, '0') + ":" + String(minutes).padStart(2, '0');

        return creationTimestamp;
    },
    favoriteTask: toggleFavtask,
    completed: toggleCompletetask,
    deleted : toggleDeletetask
}

let creationDate = task.timestamp();
console.log("Data:", creationDate);

function printWelcomeMsg(){
    const welcomeMsg = document.getElementById("welcome-message");
    welcomeMsg.style.display = "block";
    setTimeout(()=>{
        welcomeMsg.style.display = "none";
    },3000);
}






// Call functions
printWelcomeMsg();
useUsers();
useTodos();
postUser();
deleteUser();