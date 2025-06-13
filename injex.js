const navMenu =document.getElementById("navMenu");
const navToggle =document.getElementById("navToggle");
const navClose =document.getElementById("navClose");

 

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })


}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })

}
const navLink = document.querySelectorAll('.navLink')

const linkAction = () => {
    const navMenu =document.getElementById('navMenu')
    navMenu.classList.remove('show-menu')
   
}
navLink.forEach(n => n.addEventListener('click',linkAction))


 let swiperHome = new Swiper('.homeSwiper', {

    loop: true,
     grabCursor: true,
    slidesPerView:`auto`,

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
}); 