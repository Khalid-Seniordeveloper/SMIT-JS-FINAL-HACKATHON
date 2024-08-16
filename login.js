const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#button");








import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {auth} from "./config.js"


form.addEventListener("submit" , (event)=>{

    event.preventDefault();

console.log("CHALGYAA");
button.innerHTML = `

<button class="btn btn-active btn-primary" type="submit" id="button">Loading...</button>

`




    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
 
      
      // ...

     window.location = 'index.html'
      


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;


      button.innerHTML = `
      
      
                      <div id="button"><button class="btn btn-active btn-primary" type="submit" id="button">INVALID ID OR PASSWORD :( </button></div>
                      <div id="button"><button class="btn btn-active btn-primary" type="submit" id="button"> <a href="./login.html">login again ?</a></button></div>
                      
                      
                      
                     

      
      
      `
      
    });


})