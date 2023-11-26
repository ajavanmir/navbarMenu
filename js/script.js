/*
Copyright amir javanmir
Released on: november 27, 2023
*/
const menu = document.querySelector(".sidebar");
const btnMenu = menu.querySelector(".btn");
btnMenu.addEventListener("click",()=>{
    menu.classList.toggle("active");
})