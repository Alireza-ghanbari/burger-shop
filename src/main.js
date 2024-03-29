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




const html=document.querySelector('html')
const themeBtn=document.querySelector('#theme-toggle')

if(localStorage.getItem('mode')=='dark'){
    darkMode()
}else{
    lighMode()
}

themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem('mode')=='light'){
        darkMode()
    }else{
        lighMode()
    }
})


function darkMode(){
    html.classList.add('dark')
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line')
    localStorage.setItem('mode','dark')
}


function lighMode(){
    html.classList.remove('dark')
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line')
    localStorage.setItem('mode','light')
}




// TABS-------- 

const tabs=document.querySelectorAll('.tabs_wrap ul li')
const all=document.querySelectorAll('.item_wrap')
const foods=document.querySelectorAll('.food')
const beverages=document.querySelectorAll('.beverage')
const snacks=document.querySelectorAll('.snack')

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove('active')
        })

        tab.classList.add('active')



        const tabval=tab.getAttribute('data-tabs')

        all.forEach((item)=>{
            item.style.display='none'
        })

        if(tabval==='food'){
            foods.forEach((food)=>{
                food.style.display='block'
            })
        }else if(tabval==='snack'){
            snacks.forEach((snack)=>{
                snack.style.display='block'
            })
        }
        else if(tabval==='beverage'){
            beverages.forEach((beverage)=>{
                beverage.style.display='block'
            })
        }else{
            all.forEach((item)=>{
                item.style.display='block'
            })
        }

    })
})



const scrollUp=()=>{
    const scrollUpBtn=document.querySelector('#scroll-up')

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove('-bottom-1/2')
        scrollUpBtn.classList.add('bottom-4')
    }else{
        scrollUpBtn.classList.add('-bottom-1/2')
        scrollUpBtn.classList.remove('bottom-4')
    }
}

window.addEventListener('scroll',scrollUp)






const scrollHeader=()=>{
    const header=document.querySelector('#header')

    if(this.scrollY >= 50){
        header.classList.add('border-b', 'border-secondaryColor')
    }else{
        header.classList.remove('border-b', 'border-secondaryColor')
    }
}

window.addEventListener('scroll',scrollHeader)



const activeLink=()=>{
    const sections=document.querySelectorAll('section')
    const navLink=document.querySelectorAll('.nav__link')

    let current='home'

    sections.forEach(section=>{
        const sectionTop=section.offsetTop

        if(this.scrollY >= sectionTop-60){
            current=section.getAttribute('id')
        }
    })

    navLink.forEach(item=>{
        item.classList.remove('text-secondaryColor')
        if(item.href.includes(current)){
            item.classList.add('text-secondaryColor')
        }
    })
}

window.addEventListener('scroll', activeLink)


// -------


const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
})

sr.reveal(".home__image")
sr.reveal(".home__content", {origin: "bottom"})
sr.reveal(".category__card", {interval: 300})

sr.reveal(".promo__card-1", {origin: "left"})
sr.reveal(".promo__card-2", {origin: "right"})

sr.reveal(".about__img", {origin: "bottom"})
sr.reveal(".about__content", {origin: "top"})

sr.reveal(".menu__items", {origin: "left"})

sr.reveal(".customer__review", {origin: "right"})

sr.reveal(".footer")