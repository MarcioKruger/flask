/* Abre e fecha menu lateral em modo mobile */

const menuBobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuBobile.addEventListener('click', ()=>{
    menuBobile.classList.contains("bi-list")
    ? menuBobile.classList.replace("bi-list", "bi-x")
    : menuBobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
})