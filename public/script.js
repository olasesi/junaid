
const navHarburger = document.querySelector(".harmbuger ")
const navMenu =  document.querySelector(".menu");

// Toggle Nav

navHarburger.addEventListener("click", () => {
    navMenu.classList.toggle("menu-active");

        navHarburger.classList.toggle('toggle');
});

// Page back to top button
const scrollBtn = document.querySelector('.scroll-btn') ;
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 400) {
        scrollBtn.style.transform = 'translateX(0px)' ;
    }
    else {
        scrollBtn.style.transform = 'translateX(100px)' ;
        scrollBtn.style.transition = 'transform .8s ease' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})


// About
// Accordion Action
const accordionItem = document.querySelectorAll(".accordion_item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);




let swiper = new Swiper(".testimonial-slider, .partner_container", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  