const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#button");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname")



import {  collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 


import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {auth , db} from "./config.js"

 




form.addEventListener("submit", async(event)=>{

    event.preventDefault();
    console.log("PASHA CHALRHA ");
    button.innerHTML = `
    
    <button class="btn btn-active btn-primary" type="submit" id="button">Loading...</button>
    
    `


    try {
      const docRef = await addDoc(collection(db, "users" ), {
        first: fname.value,
        last: lname.value,
        
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }





    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        const uid = user.uid;
        // ...
        email.value = '';
        password.value = '';
       
        console.log(uid + "uid ye rhi");
        
        // window.location = 'login.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
    

console.log("REGISTER HOGYA");






})

