const navItems = document.querySelector('#nav-items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

openNavBtn.addEventListener('click',()=> {
    navItems.style.display="flex";
    openNavBtn.style.display="none";
    closeNavBtn.style.display="inline-block";
});

const closeNav = () =>{
    navItems.style.display="none";
    openNavBtn.style.display="inline-block";
    closeNavBtn.style.display="none";    
};

closeNavBtn.addEventListener('click' ,closeNav);


// close navbar when menu item is clicked
if(window.innerWidth < 1024){
    document.querySelectorAll("#nav-items li a").forEach(navItems => {
        navItems.addEventListener('click',() => {
            closeNav();
        })    
    })
}


// change navbar style on scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0 )
})


// testomonails section swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    //responsive breakpoints 
    breakpoints:{
        // when window witdh is >= 600px 
        600:{
            slidesPerView:2
             
        },
         // when window witdh is >= 600px 
        1024:{
            slidesPerView:3
             
        }
    }
  });