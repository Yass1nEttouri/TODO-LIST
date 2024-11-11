import { getUsers } from "../module-dataAPI.js";
import { navigateTo } from "../Router.js";

// global variable for current logged in user
export let currentUser = null;

// verifying hashed password
async function verifyPassword(plainPassword, hashedPassword) {
    console.log("plainpass: ",plainPassword);
    console.log("hashedPassword: ",hashedPassword);
    const isPasswordCorrect = await dcodeIO.bcrypt.compare(plainPassword, hashedPassword);
    if(isPasswordCorrect){
        console.log("Password verified");
        return true;
    }else{
        console.error("Password error");
        return false;
    }
}

// getting user login from form login
async function getLoginData() {
    const email = document.querySelector('#emailogin').value;
    const password = document.querySelector('#pass').value;

    const endpoint = `http://localhost:3000/users?email=${encodeURIComponent(email)}`;
    const UserWithLogindata = await getUsers(endpoint);
    //aggiungere controlli di errore
/*     console.log("User with login data:",UsersWithLogindata[0].email);
    console.log("hashpass:",UsersWithLogindata[0].passwordA); */
    currentUser  = UserWithLogindata[0].id;
    let data = {
        useremail : email,
        userpassword : password,
        userhashedPassword : UserWithLogindata[0].passwordA
    }
    return (data);
}

// verifying user login
document.querySelector('#access').addEventListener('click', async (e)=>{
    e.preventDefault();
    const data = await getLoginData();
    const result = await verifyPassword(data.userpassword, data.userhashedPassword);
    if(result)
        console.log("Login successful");
    else
        console.error("Login error");
})


//gestione rotte in js per login e registrazione
//capire come funziona preventDefault()
