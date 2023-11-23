"use strict";
// DOM selectors 
const markAllRead = document.querySelector("#markAllRead");
const userName = document.querySelectorAll(".user_name");
const userMessages = document.querySelectorAll(".user_messages");

// Show message text
const receivedEl = document.querySelector(".received").addEventListener("click", () =>{
  document.querySelector(".read_message").classList.toggle("active");
});

// Go around elements then add and remove classes
for(let i=0; i<3; i++){
  // Added "element_after" class to "user_name"
  userName[i].classList.add("element_after");
   // Added "element_active" class to "user_messages"
  userMessages[i].classList.add("element_active");
  // Deleting classes from those elements when click on "user_messages"
  userMessages[i].addEventListener("click",() =>{
    userMessages[i].classList.remove("element_active");
    userName[i].classList.remove("element_after");
  })
  // Deleting all classes from those classes when click on "markAllRead" button
  markAllRead.addEventListener("click", () =>{
    userMessages[i].classList.remove("element_active");
    userName[i].classList.remove("element_after");
  })
};
