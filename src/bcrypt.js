// module used to hash password with bcryptjs 

//const bcrypt = require('bcryptjs');  --> use this with node.js
// import bcrypt from 'bcryptjs';       
//--> use this with bundler(webpack or vite)
// bcrypt imported globally in signup.html
/* import bcrypt from 'https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js'; */
export async function hashPassword(password) {
    const saltRounds = 10;
    const hash = await dcodeIO.bcrypt.hash(password, saltRounds);
    return hash;
}