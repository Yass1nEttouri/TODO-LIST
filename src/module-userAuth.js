//User authtentication module

import { postUser,getUsers } from "./module-dataAPI.js";

function getUserRegister(){
    // User object
    let user = {
        name : "",
        surname : "",
        email : "",
        username : "",
        passwordA : "",
    }
    document.querySelector('form').addEventListener('input', (event) => {
        if (event.target.matches('#email')){
            user.email = event.target.value;
            user.username = user.email.split('@')[0];
        }
        if (event.target.matches('#passA')) 
            user.passwordA = event.target.value;
        if (event.target.matches('#nome')) 
            user.name = event.target.value;
        if (event.target.matches('#cognome')) 
            user.surname = event.target.value;
    });

    return user;
}
let user = getUserRegister();
// Posting a new user on db.json
document.querySelector('#submit').addEventListener('click',(e)=>{
    e.preventDefault();
    /* console.log("Object user:",user); */
    postUser(user);
})


// Verifying user login
function getUserlogin(){
    let login = {
        email : "",
        password : "",
    }
    document.querySelector('formlogin').addEventListener('input', (event) => {
        if (event.target.matches('#pass')) 
            login.password = event.target.value;
        if (event.target.matches('#emailogin')) 
            login.email = event.target.value;
    })
    return login;
} 
let logindata = getUserlogin();
console.log("logindata: ",logindata);
const endpoint = "http://localhost:3000/users?email=${logindata.email}&passwordA=${logindata.password}";
document.querySelector('#access').addEventListener('click',(e)=>{
    e.preventDefault();
    getUsers(endpoint);
})
