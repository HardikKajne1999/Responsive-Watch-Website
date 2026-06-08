let menu = document.querySelector('.menu-logo');
let navlinks = document.querySelector('.nav-links');
menu.addEventListener('click',()=>{
    navlinks.classList.toggle('nav-links-active');
})