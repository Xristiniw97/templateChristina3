// CAROUSELS INIT 
$(document).ready(function () {
  $(".twoColCarousel").owlCarousel({
    loop: false,
    margin: 0,
    autoplay: false,
    nav: true,
    navText: ["Previous", "Next"],
    dots: false,
    items: 1,
  });

  $(".experiencesCarousel").owlCarousel({
    loop: false,
    margin: 0,
    autoplay: false,
    nav: true,
    navText: ["Previous", "Next"],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1300: {
        items: 3,
      },
    },
  });

  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },

      576: {
        items: 2,
      },

      1399: {
        items: 3,
      },
    },
  });
});
// CAROUSELS INIT 

// GALLERY FILTERS
$(document).ready(function(){
  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          $('.filter').show('1000');
      }
      else
      {
          $(".filter").not('.'+value).hide('4000');
          $('.filter').filter('.'+value).show('4000'); 
      }
  });
  $(".filter-button").each(function(){
     $(this).click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
     });
  });
});
// GALLERY FILTERS

//AOS INIT
AOS.init({
  easing: "ease-out-back",
});
//AOS INIT

// SCROLL UP 
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("active");
    }
  });
});
// SCROLL UP 

//MOBILE MENU OVERLAY
let side1 = document.querySelector(".side1");
let side2 = document.querySelector(".side2");
let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".bi-list");
let close = document.querySelector(".bi-x");

console.log(side1, side2, overlay, open, close);

open.addEventListener("click", () => {
  overlay.style.transform = "translateX(0)";
  side2.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
  overlay.style.transform = "translateX(110%)";
  side2.style.transform = "translateX(-110%)";
});
//MOBILE MENU OVERLAY

