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