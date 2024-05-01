$(function () {

  $(".hero__slider").slick({
    dots: true,
    prevArrow: '<button class="hero-slider__btn hero-slider__btn--prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="hero-slider__btn hero-slider__btn--next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: false
        }
      }
    ]
  })

  $(".tab").on("click", function(e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass("tabs-content--active");

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $(".slick-slider").slick("setPosition");
  })

  $(".popular-slider__favorites").on("click", function() {
    $(this).toggleClass("popular-slider__favorites--active")
  })

  $(".popular-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="popular-slider__btn popular-slider__btn--prev"><img src="images/arrow-left-black.svg" alt=""></button>',
    nextArrow: '<button class="popular-slider__btn popular-slider__btn--next"><img src="images/arrow-right-black.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  })

  $(".filter-style").styler();

  $(".filter-item-drop, .filter-btn__extra").on("click", function() {
    $(this).toggleClass("filter-item-drop--active");
    $(this).next().slideToggle(200);
  })

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000
  });

  $(".catalogue__btns-item--grid").on("click", function() {
    $(this).addClass("catalogue__btns-item--active");
    $(".catalogue__btns-item--line").removeClass("catalogue__btns-item--active");
    $(".popular-slider__wrapper").removeClass("popular-slider__wrapper--line");
  })

  $(".catalogue__btns-item--line").on("click", function() {
    $(this).addClass("catalogue__btns-item--active");
    $(".catalogue__btns-item--grid").removeClass("catalogue__btns-item--active");
    $(".popular-slider__wrapper").addClass("popular-slider__wrapper--line");
  })

  $(function () {
 
    $(".rate-yo").rateYo({
      starWidth: "23px",
      ratedFill: "#1c62cd",
      normalFill: "#c4c4c4",
      spacing: "7px"
    });
   
  });

  $(".menu__btn").on("click", function() {
    $(".mobile-menu__list").toggleClass("mobile-menu__list--active");
  })

  // $(".footer__top-title").on("click", function() {
  //   $(this).next().slideToggle(200);
  // })
  $(".aside-btn").on("click", function() {
    $(this).next().slideToggle();
  })
})