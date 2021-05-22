$(window).on("load", function () {
  //preloader
  $(".pre-loader").fadeOut("500", function () {
    $("body").removeClass("overflow");
    $(this).remove();
  });

  if ($(".pre-loader").length == 0) {
    $("body").removeClass("overflow");
  }

  //nava toggle
  $("#nava-icon").click(function (e) {
    $("#nava").toggleClass("nava-active");
    $("html").toggleClass("overflow");
  });

  $("#nava").click(function (e) {
    if (
      e.target.id == "nava" ||
      e.target.id == "close-nava" ||
      e.target.parentNode.id == "close-nava"
    ) {
      $(this).removeClass("nava-active");
      $("html").removeClass("overflow");
    }
  });

  $(".slide").on("click", function (e) {
    if (
      (e.target.classList.contains("drop") &&
        e.target.parentNode.classList.contains("slide")) ||
      e.target.classList.contains("slide")
    ) {
      e.stopPropagation();
      $(this).toggleClass("slide-active");
      $(this).children(".top-dropDown").slideToggle();
    }
  });

  function changeSlide() {
    if (window.innerWidth <= 992) {
      $(".sm-slide").removeClass("top-setting");
      $(".sm-slide").addClass("slide");
      $(".sm-slide .top-dropDown").css("display", "none");

      // add swipers
      $(".swiper-container-here").addClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").addClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").addClass("swiper-slide");
    } else {
      $(".sm-slide").addClass("top-setting");
      $(".sm-slide").removeClass("slide");
      $(".sm-slide .top-dropDown").css("display", "flex");

      // remove swipers
      $(".swiper-container-here").removeClass("s-swiper-container");
      $(".swiper-container-here .swiper-wrapper-here").removeClass(
        "swiper-wrapper"
      );
      $(".swiper-container-here .swiper-slide-here").removeClass(
        "swiper-slide"
      );
    }
  }

  changeSlide();

  window.addEventListener("resize", changeSlide);



  var mySwiper2 = new Swiper(".s-swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var mySwiper4 = new Swiper(".services-swiper-container", {
    direction: "horizontal",
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById("up");
    if (this.scrollY > 200) {
      up.classList.add("active-up");
    } else {
      up.classList.remove("active-up");
    }
  }

});
