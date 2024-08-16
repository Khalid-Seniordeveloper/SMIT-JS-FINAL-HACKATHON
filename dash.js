import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import { db } from "./config.js";

const title = document.querySelector("#title");
const blog = document.querySelector("#blog");
const form = document.querySelector("#form");
const my = document.querySelector(".myblog")
let arr = [];


form.addEventListener("submit", async(event)=> {

event.preventDefault();

console.log("DASH CHALRHA HY");


try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title : title.value,
      blog : blog.value
    });

    arr.push({


title : title.value,
blog : blog.value

    })

    console.log(arr);
    





    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

my.innerHTML =  `

<h1>BLOG IS PUBLISHED YOU CAN WATCH HERE  <a href="./index.html">GO TO ALL BLOGS</a></h1>


`

})







