const menuBtn=document.querySelector('.menu-btn');
const ham=document.querySelector('.menu-btn_ham');
const nav =document.querySelector('.nav');
const menuNav=document.querySelector('.menu-nav');
const menuitems=document.querySelectorAll('.menu-nav_item');
let showMenu=false;
menuBtn.addEventListener('click',()=>{
    if(!showMenu){
        ham.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuitems.forEach(items=>items.classList.add('open'));
        showMenu=true;
    }else{
        showMenu=false;
        ham.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuitems.forEach(items=>items.classList.remove('open'));
    }
});