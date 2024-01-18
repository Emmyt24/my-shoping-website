
    let search = document.querySelector('.search-bar');
    document.querySelector('#search-icon').onclick= () =>{
        search.classList.toggle('active'); 
        cart.classList.remove('active'); 
        user.classList.remove('active');
        signup.classList.remove('active');
    }
    let cart = document.querySelector('.cart');
    document.querySelector('#cart-icon').onclick= () =>{
        cart.classList.toggle('active'); 
        search.classList.remove('active');
        user.classList.remove('active');
        signup.classList.remove('active');
    }
    let user = document.querySelector('.user');
    document.querySelector('#user-icon').onclick= () =>{
        user.classList.toggle('active'); 
        cart.classList.remove('active'); 
        search.classList.remove('active');
        signup.classList.remove('active');
    }
    let signup = document.querySelector('.Sign-up');
    document.querySelector('#clicked-sign').onclick= () =>{
        signup.classList.toggle('active');
        user.classList.Remove('active'); 
        cart.classList.remove('active'); 
        search.classList.remove('active'); 
    }

    // var swiper = new Swiper(".new-arrival", {
    //   spaceBetween: 30,
    //   loop: true, 
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   centeredSlides:true,
    //   breakpoints:{
    //     0:{
    //       slidesPerView:0,
    //     },
    //     568:{
    //       slidesPerView:2,
    //     },
    //     768:{
    //       slidesPerView:2,
    //     },
    //     1020:{
    //       slidesPerView:3,
    //     },
    //   },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    // });