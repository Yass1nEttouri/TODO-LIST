//User authtentication module

import { postUser } from "../module-dataAPI.js";
import { hashPassword } from "../bcrypt.js";

function getUserRegister(){
    // User object
    let user = {
        name : "",
        surname : "",
        email : "",
        username : "",
        passwordA : "",
    }
    document.querySelector('form').addEventListener('input', async (event) => {
        if (event.target.matches('#email')){
            user.email = event.target.value;
            user.username = user.email.split('@')[0];
        }
        if (event.target.matches('#passA'))
            user.passwordA = await hashPassword(event.target.value); 
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


