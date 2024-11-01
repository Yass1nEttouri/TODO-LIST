
// Abort control for async requests
const controller = new AbortController();
const signal = controller.signal;

// Fetching users
async function getUsers() {
    try {
        const response = await fetch("http://localhost:3000/users",{signal});
        const data = await response.json();
        return data;
    } catch (error) {
        if(error.name == "AbortError"){
            console.log("Fetch users aborted.");
        }else{
            console.error("Fetching users error caught:", error);
            return [];
        }
    }
}
export async function useUsers() {
    const utenti =  await getUsers();

    utenti.forEach((user) => {
        console.log(`utente ${user.name} with id ${user.id}`);
    });
}

// Fetching todos
async function getTodos() {
    try {
        const response = await fetch("http://localhost:3000/tasks",{signal});
        const data = await response.json();
        /* console.log(data); */
        return data;
    } catch (error) {
        if(error == "AbortError"){
            console.log("Fetch todos aborted.");
        }else{
            console.log("Fetching todos error caught:",error);
            return [];
        }
    }
}
export async function useTodos(){
    const todos = await getTodos();
    todos.forEach((todo) => {
        if(todo.id <= 20)
            console.log(`todo ${todo.id}: ${todo.taskDesc} `);
    })
}

// Posting user on db.json
export async function postUser(newUserData) {
    try{
        const response = await fetch("http://localhost:3000/users",{signal},{
            method : "POST",
            headers : {"Contect-type":"application/json"},
            body: JSON.stringify(newUserData),
        });
        const userCreated = await response.json();
        console.log("New user added: ",userCreated);

    } catch(error) {
        if(error == "AbortError")
            console.log("Post user aborted");
        else
            console.error("Adding user error caught:",error) 
    }
}

// Deleting user with id from db.json
export async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`,{signal}, {
            method: "DELETE",
        });
        if (response.ok)
            console.log(`User with id  eliminated.`);
        else
            console.error("Deleting user response error:", response.statusText);

    } catch (error) { 
        if(error == "AbortError")
            console.log("Delete user aborted");
        else
            console.error("Deleting user error caught:", error);
    }
}
