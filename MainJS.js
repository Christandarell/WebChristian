let menu= document.querySelector('#menu-icon');
let navabar= document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classicList.toggle('bx-x');
    navbar.classicList.toggle('active');
}
window.onscroll =() => {
    menu.classList.remove('bx-x');
    navbar.classicList.remove('active');
}

window.addEventListener('scroll',()=>{
    header.classicList.toggle('shadow',window.scrollY > 0);
});
 

