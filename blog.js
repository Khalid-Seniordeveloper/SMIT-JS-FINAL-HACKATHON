import { collection , getDocs ,  deleteDoc , doc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import { db , auth } from "./config.js";



let arr = [];

const div = document.querySelector("#container")
const blogg = document.querySelector(".blogs")

auth.onAuthStateChanged((user) => {


    if (user) {
      
      console.log("login hy bhai", user.email);

      div.innerHTML= `
      
 
   <h3>GOOD MORNING</h3>
      
      <div >
        <a href="./dash.html" id="link">Add blog</a>
         </div>
   
      `
    
    
    } else {
   

   div.innerHTML = `
   <h3>GOOD MORNING</h3>


   <div >

            <a href="./login.html" id="link-1">Login</a>
        <a href="./register.html" id="link">Register</a>
         </div>
   
   
   `


    }
  });





  async function render(){


    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);

 

      let managayaHuwa = doc.data();
       
  arr.push(managayaHuwa);

  console.log(arr);

  blogg.innerHTML = '';
for (let index = 0; index < arr.length; index++) {

  blogg.innerHTML += `
  
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> TITLE : ${arr[index].title}</h5>
  

    
    <p class="card-text" > DESCRIPTION : ${arr[index].blog}</p>

    <button id="del">DELETE</button>
        <button id="del">EDIT</button>

  </div>
</div>
  
  
  `

  
}

  
    });


  }

  render();
 

