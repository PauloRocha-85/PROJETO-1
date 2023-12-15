
window.addEventListener("scroll", function(){
    let header = document.querySelector('#reader')
    header.classList.toggle('rolagem',window.scrollY > 0)
})

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('btn-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})