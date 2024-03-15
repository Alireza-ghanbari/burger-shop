const hamburger=document.querySelector('#hamburger')
const navMenu=document.querySelector('#nav-menu')
// const navClose=document.querySelector('#nav-close')
const navLink=document.querySelectorAll('.nav__link')

navLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden')
    })
})

hamburger.addEventListener('click',()=>{
    navMenu.classList.toggle('hidden')
})

// navClose.addEventListener('click',()=>{
//     navMenu.classList.add('hidden')
// })